const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const { timeStamp } = require("console");

const port = process.env.PORT || 8076;

async function updateRanksAndRewards(founder) {
  console.log("Updating ranks and rewards for founder:", founder.address);
  try {
    const {
      address,
      totalBuys,
      directBuys,
      joinedAt,
      rank,
      rewardGiven,
      rewardAmount,
      rewardAt,
      manualChange,
      level1Users,
      level1Buys,
    } = founder;

    const joinDate = new Date(joinedAt);
    const currentDate = new Date();
    console.log("Updating Data for Founder: ", founder);

    // Check conditions for becoming a Team Leader within 96 hours (4 days) of joining
    const joinDatePlus96Hours = new Date(
      joinDate.getTime() + 96 * 60 * 60 * 1000
    );
    if ((rank == null || rank == undefined || rank == "") && !manualChange) {
      if (
        directBuys >= 100 &&
        level1Users.length >= 4 &&
        level1Users.filter((conn) => conn.totalBuys >= 100).length >= 4
      ) {
        // Update rank to Team Leader and give reward if not already given
        if (rank !== "Team Leader" && !rewardGiven) {
          founder.rank = "Team Leader";
          founder.rewardGiven = true;
          founder.rewardAmount = 100;
          founder.rewardAt = currentDate;
          console.log(
            `Updated ${address} to Team Leader and gave $100 bonus in Lord Founder tokens.`
          );
          // Implement logic to give $100 bonus in Lord Founder tokens here
        }
      }
    }

    const FounderD = mongoose.model('Founder', founderSchema);
    // Check conditions for becoming a Team Co-Founder within 15 days of joining
    const joinDatePlus15Days = new Date(
      joinDate.getTime() + 15 * 24 * 60 * 60 * 1000
    );
    let directTotal = level1Users.reduce(
      (sum, conn) => sum + conn.totalBuys,
      0
    );
    if (currentDate <= joinDatePlus15Days) {
      if (
        directBuys >= 500 &&
        (level1Users.filter((conn) => conn.rank === "Team Leader").length >=
          3 ||
          directTotal >= 5000 ||
          level1Buys >= 5000) &&
        rank !== "Team Co-Founder"
      ) {
        // Calculate 5% of team's total buy till level 25
        // Assuming `totalBuys` is available directly
        const rewardAmount = totalBuys * 0.05;

        // Check if there is an upper connection as Founder for the particular leg
        const hasUpperFounder = level1Users.some(
          (conn) => conn.rank === "Founder"
        );
        if (hasUpperFounder) {
          // Give 3% to Co-Founder and 5% to Founder
          const coFounderReward = totalBuys * 0.05;
          const founderReward = totalBuys * 0.03;
          console.log(
            `Co-Founder reward: ${coFounderReward}, Founder reward: ${founderReward}`
          );
          // Implement logic to give reward in Lord Founder tokens here
        }

        // Update rank to Team Co-Founder and give reward if not already given
        if (rank !== "Co-Founder" && !rewardGiven) {
          founder.rank = "Co-Founder";
          founder.rewardGiven = true;
          founder.rewardAmount = rewardAmount;
          founder.rewardAt = currentDate;
          console.log(
            `Updated ${address} to Team Co-Founder and gave reward of ${rewardAmount} in Lord Founder tokens.`
          );
        }
      }
    }

    // Check conditions for becoming a Team Founder after 15 days
    if (currentDate > joinDatePlus15Days && rank !== "Team Founder") {
      let directTotal1 = level1Users.reduce(
        (sum, conn) => sum + conn.totalBuys,
        0
      );
      if (
        directBuys >= 1000 &&
        (level1Users.filter((conn) => conn.rank === "Co-Founder").length >= 3 ||
          directTotal1 >= 15000 ||
          level1Buys >= 15000)
      ) {
        // Calculate 8% of team's total buy till level 25
        // Assuming `totalBuys` is available directly
        const rewardAmount = totalBuys * 0.08;

        // Update rank to Team Founder and give reward if not already given
        if (rank !== "Team Founder" && !rewardGiven) {
          founder.rank = "Team Founder";
          founder.rewardGiven = true;
          founder.rewardAmount = rewardAmount;
          founder.rewardAt = currentDate;
          console.log(
            `Updated ${address} to Team Founder and gave reward of ${rewardAmount} in Lord Founder tokens.`
          );
        }
      }
    }
    if (rank !== "Elite Founder") {
      let directTotal1 = level1Users.reduce(
        (sum, conn) => sum + conn.totalBuys,
        0
      );
      if (
        directBuys >= 1000 &&
        level1Users.filter((conn) => conn.rank === "Team Founder").length >= 10
      ) {
        // Calculate 8% of team's total buy till level 25
        // Assuming `totalBuys` is available directly
        const rewardAmount = totalBuys * 0.02;

        // Update rank to Team Founder and give reward if not already given
        if (rank !== "Elite Founder" && !rewardGiven) {
          founder.rank = "Elite Founder";
          founder.rewardGiven = true;
          founder.rewardAmount = rewardAmount;
          founder.rewardAt = currentDate;
          console.log(
            `Updated ${address} to Team Founder and gave reward of ${rewardAmount} in Lord Founder tokens.`
          );
        }
      }
    }

    // Update lastUpdated timestamp
    founder.lastUpdated = currentDate;

    // Save founder to MongoDB
    await founder.save();
  } catch (error) {
    console.error("Error updating ranks and rewards:", error);
  }
}
const connectDB = async () => {
  try {
    // await mongoose.connect('mongodb+srv://chainforgetechnologies:WcYi1N4dIDgR39f9@cluster0.bwpfmya.mongodb.net/memeLord?retryWrites=true&w=majority', {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // });
    await mongoose.connect("mongodb://localhost:27017", {});
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
    process.exit(1);
  }
};

connectDB();
const founderSchem = new mongoose.Schema({
  address: String,
  totalBuys: Number,
  directBuys: Number,
  joinedAt: Date,
  rank: String,
  rewardGiven: Boolean,
  rewardAmount: Number,
  rewardAt: Date,
  manualChange: Boolean,
  lastUpdated: Date,
  level1Users: {
    type: [
      {
        address: String,
        joinedAt: Date,
        totalTokensBoughtUsd: Number,
        rank: String,
      },
    ],
    level1Users: {
      type: [
        {
          address: String,
          joinedAt: Date,
          totalTokensBoughtUsd: Number,
          rank: String,
        },
      ],
      default: [], // Default value is an empty array
    },
    level1Buys: Number,
  },
});

app.use(bodyParser.json());
app.use(cors());
// app.use(express.static(path.join(__dirname)));
// app.use(bodyParser.json());
// app.use(
//     bodyParser.urlencoded({
//         extended: true,
//     }),
// );

app.use(express.static(path.join(__dirname, "dist")));
app.post("/api/add-new-user", async (req, res) => {
  const { address, totalBuys, directBuys, joinedAt, level1Users, level1Buys } =
    req.body;

  try {
    let founder = await FounderD.findOne({ address });
    if (founder) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    founder = new FounderD({
      address,
      totalBuys,
      directBuys,
      joinedAt,
      rank: null,
      rewardGiven: false,
      rewardAmount: 0,
      rewardAt: null,
      manualChange: false,
      lastUpdated: new Date(),
      level1Users,
      level1Buys,
    });
    await founder.save();
    await updateRanksAndRewards(founder);

    res.json({
      success: true,
      message: "New user added and ranks updated successfully",
      founder,
    });
  } catch (error) {
    console.error("Error adding new user:", error);
    res.status(500).json({ error: "Failed to add new user" });
  }
});

app.get("/*", function (request, response) {
  response.sendFile(path.join(__dirname, "dist", "index.html"));
});
app.listen(port, () => {
  console.log("Server started on port " + port);
});
const FounderD = mongoose.model("Founder", founderSchem);
app.post("/api/rankAndRewards", async (req, res) => {
  console.log("Updating ranks and rewards...");
  console.log(req.body);
  try {
    // Fetch all Founders
    const founders = await FounderD.find();

    // Iterate through each Founder
    for (const founder of founders) {
      const level1Users = founder.level1Users; // Assuming level1Users is an array of addresses
      if (founder.address == "0x0CdE5A1122297251933C03836523566F6fF23a1b") {
        console.log("Founder:", founder);
        console.log("Level 1 Users:", level1Users);
        console.log("Updating ranks and rewards for founder:", founder.address);
      }
      const level1UserAddresses = level1Users.map((user) => user.address);
      const level1Founders = await FounderD.find({
        address: { $in: level1UserAddresses },
      });
      if (founder.address == "0x0CdE5A1122297251933C03836523566F6fF23a1b") {
        console.log("Level 1 Founders:", level1Founders);
      }
      // Check if each level1User's DirectBuy is greater than or equal to 100
      const eligibleLevel1Users = level1Founders.filter((user) => {
        console.log("User Buy :", user.directBuys);
        const isDirectBuyEligible = user.directBuys >= 100;
        const isJoinDateEligible =
          new Date(user.joinedAt) - new Date(founder.joinedAt) <=
          96 * 60 * 60 * 1000; // 4 Days in milliseconds
        return isDirectBuyEligible && isJoinDateEligible;
      });
      if (founder.address == "0x0CdE5A1122297251933C03836523566F6fF23a1b") {
        console.log("Eligible Level 1 Users:", eligibleLevel1Users);
      }
      const eligibleLevel1TeamLeader = level1Founders.filter((user) => {
        const isDirectBuyEligible = user.rank == "Team Leader";
        const isFounderEligible = founder.directBuys >= 500;
        const isJoinDateEligible =
          new Date(user.joinedAt) - new Date(founder.joinedAt) <=
          360 * 60 * 60 * 1000; // 15 Days in milliseconds
        return isDirectBuyEligible && isJoinDateEligible && isFounderEligible;
      });
      const eligibleLevel1TeamCoFounder = level1Founders.filter((user) => {
        const isDirectBuyEligible = user.rank == "Co-Founder";
        const isJoinDateEligible =
          new Date(user.joinedAt) - new Date(founder.joinedAt) <=
          360 * 60 * 60 * 1000; // 15 Days in milliseconds
        return isDirectBuyEligible && isJoinDateEligible;
      });
      const eligibleLevel1TeamFounder = level1Founders.filter((user) => {
        if (user.rank == "Team Founder") {
          return user;
        }
      });

      if (eligibleLevel1Users.length >= 4) {
        if (founder.rank !== "Team Leader" && !founder.rewardGiven) {
          founder.rank = "Team Leader";
          founder.rewardGiven = true;
          founder.rewardAmount = 100;
          founder.rewardAt = new Date();
          console.log(
            `Updated ${founder.address} to Team Leader and gave $100 bonus in Lord Founder tokens.`
          );
          await founder.save();
        }
      }
    }

    res.status(200).json({ message: "Ranks and rewards updated successfully" });
  } catch (error) {
    console.error("Error updating ranks and rewards:", error);
    res.status(500).json({ error: "Failed to update ranks and rewards" });
  }
});
//added user rank

app.post("/api/update-founders", async (req, res) => {
  console.log("Updating founders...");
  console.log(req.body);
  try {
    const {
      address,
      totalBuys,
      directBuys,
      joinedAt,
      level1Users,
      level1Buys,
    } = req.body;
    console.log("level1user ->", level1Users);
    let founder = await FounderD.findOne({ address: address });
    console.log("Before update:", founder);

    // If the founder exists, update the fields manually
    if (founder) {
      founder.totalBuys = totalBuys;
      founder.directBuys = directBuys;
      founder.level1Users = level1Users;
      founder.joinedAt = joinedAt;
      founder.level1Buys = level1Buys;
      founder.lastUpdated = new Date();
      await founder.save(); // Save the updated document

      console.log("After update:", founder);
      res.json({ success: true, message: "Founder updated successfully" });
    } else {
      let rewardGiven = false;
      let rewardAmount = 0;
      let rewardAt = null;
      let rank = null;
      let manualChange = false;
      let lastUpdated = new Date();
      founder = await FounderD.create({
        address,
        totalBuys,
        directBuys,
        joinedAt,
        rank,
        rewardGiven,
        rewardAmount,
        rewardAt,
        manualChange,
        lastUpdated,
        level1Users,
        level1Buys,
      });
      console.log("New founder added:", founder);
      res.json({ success: true, message: "Founder added successfully" });
    }
  } catch (error) {
    console.error("Error updating founders:", error);
    res.status(500).json({ error: "Failed to update founders" });
  }
});
app.post("/api/founders", async (req, res) => {
  console.log("Fetching founder...");
  console.log(req.body);
  try {
    const { address } = req.body;
    let founder = await FounderD.findOne({ address: address });
    if (founder) {
      console.log("Founder found:", founder);
      res.json({ success: true, founder });
    } else {
      console.log("No founder found with address:", address);
      res.json({
        success: false,
        message: "No founder found with the given address",
      });
    }
  } catch (error) {
    console.error("Error fetching founder:", error);
    res.status(500).json({ error: "Failed to fetch founder" });
  }
});
app.post("/api/update", async (req, res) => {
  console.log("Updating all founders...");
  try {
    let founders = await FounderD.find();
    for (let founder of founders) {
      // Check and update ranks and give rewards
      await updateRanksAndRewards(founder);
    }
    // Return updated founders data
    res.json({ success: true, founders });
  } catch (error) {
    console.error("Error updating all founders:", error);
    res.status(500).json({ error: "Failed to update all founders" });
  }
});
app.post("/api/foundersByRank", async (req, res) => {
  try {
    let founders = await FounderD.find({ rank: { $ne: null } });
    // Return the found founders
    res.json({ success: true, founders });
  } catch (error) {
    console.error("Error fetching founders by rank:", error);
    res.status(500).json({ error: "Failed to fetch founders by rank" });
  }
});
