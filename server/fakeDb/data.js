const mongoose = require("mongoose");
const moment = require("moment");

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();

const forum1Id = mongoose.Types.ObjectId();
const forum2Id = mongoose.Types.ObjectId();
const forum3Id = mongoose.Types.ObjectId();

const topic1Id = mongoose.Types.ObjectId();

const post1Id = mongoose.Types.ObjectId();
const post1CreatedAt = moment().subtract(7, "days");

const post2Id = mongoose.Types.ObjectId();
const post2CreatedAt = moment(post1CreatedAt).add(1, "days");

const post3Id = mongoose.Types.ObjectId();
const post3CreatedAt = moment(post2CreatedAt).add(1, "days");

const post4Id = mongoose.Types.ObjectId();
const post4CreatedAt = moment(post3CreatedAt).add(1, "days");

const data = {
  users: [
    {
      _id: user1Id,
      avatar:
        "https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png",
      email: "sergey@gmail.com",
      name: "Sergey Polakov",
      username: "SergeyPolakov",
      info: "Hello I am Sergey and I am a developer!",
      password: "testtest",
      role: "admin",
    },
    {
      _id: user2Id,
      avatar:
        "https://img.favpng.com/17/3/18/computer-icons-user-profile-male-png-favpng-ZmC9dDrp9x27KFnnge0jKWKBs.jpg",
      email: "test@gmail.com",
      name: "Test User",
      username: "TestUser",
      info: "Hello I am Test User!",
      password: "testtest",
    },
  ],
  portfolios: [
    {
      title: "Title_1",
      company: "Company_1",
      companyWebsite: "www.google.com",
      location: "Location_1",
      jobTitle: "JobTitle_1",
      description: "Description_1",
      startDate: "01/01/2014",
      endDate: "01/01/2016",
      user: user1Id,
    },
    {
      title: "Title_2",
      company: "Company_2",
      companyWebsite: "www.google.com",
      location: "Location_2",
      jobTitle: "JobTitle_2",
      description: "Description_2",
      startDate: "01/01/2014",
      endDate: "01/01/2016",
      user: user1Id,
    },
    {
      title: "Title_3",
      company: "Company_3",
      companyWebsite: "www.google.com",
      location: "Location_3",
      jobTitle: "JobTitle_3",
      description: "Description_3",
      startDate: "01/01/2014",
      endDate: "01/01/2016",
      user: user1Id,
    },
  ],
  forumCategories: [
    {
      _id: forum1Id,
      title: "Title_1",
      subTitle: "SubTitle_1",
      slug: "slug1",
    },
    {
      _id: forum2Id,
      title: "Title_2",
      subTitle: "SubTitle_2",
      slug: "slug2",
    },
    {
      _id: forum3Id,
      title: "Title_3",
      subTitle: "SubTitle_3",
      slug: "slug3",
    },
  ],
  topics: [
    {
      _id: topic1Id,
      title: "Title_1",
      slug: "slug1",
      content: "SomeContent_1",
      forumCategory: forum1Id,
      user: user1Id,
    },
    {
      title: "Title_2",
      slug: "slug2",
      content: "SomeContent_2",
      forumCategory: forum1Id,
      user: user1Id,
    },
    {
      title: "Title_3",
      slug: "slug3",
      content: "SomeContent_3",
      forumCategory: forum1Id,
      user: user1Id,
    },
  ],
  posts: [
    {
      _id: post1Id,
      content: "SomeContent_1",
      slug: "md43",
      fullSlug: post1CreatedAt.toISOString() + ":md43",
      topic: topic1Id,
      user: user1Id,
      createdAt: post1CreatedAt,
    },
    {
      _id: post2Id,
      content: "SomeContent_2",
      slug: "md59",
      fullSlug: post2CreatedAt.toISOString() + ":md59",
      topic: topic1Id,
      user: user2Id,
      createdAt: post2CreatedAt,
    },
    {
      _id: post3Id,
      content: "SomeContent_3",
      slug: "md59/md79",
      fullSlug:
        post2CreatedAt.toISOString() +
        ":md59" +
        "/" +
        post3CreatedAt.toISOString() +
        ":md79",
      topic: topic1Id,
      user: user1Id,
      parent: post2Id,
      createdAt: post3CreatedAt,
    },
    {
      _id: post4Id,
      content: "SomeContent_4",
      slug: "md59/md79/md89",
      fullSlug:
        post2CreatedAt.toISOString() +
        ":md59" +
        "/" +
        post3CreatedAt.toISOString() +
        ":md79" +
        "/" +
        post4CreatedAt.toISOString() +
        ":md89",
      topic: topic1Id,
      user: user2Id,
      parent: post3Id,
      createdAt: post4CreatedAt,
    },
  ],
};

module.exports = data;
