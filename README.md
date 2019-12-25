# prismagram

Instargram clone with Express + Prisma + React and React Native

## User Stories

- [x] Create account
- [x] Request Secret
- [x] Confirm Secret(Login)
- [ ] Log in
- [x] Like / Unlike a photo
- [x] Comment on a photo
- [ ] Search by user
- [ ] Search by location
- [ ] See user profile
- [ ] Follow / Unfollow User
- [ ] See the full photo
- [ ] Edit my profile
- [ ] Upload a photo
- [ ] edit the photo (Delete)
- [ ] See the feed

## prisma

# Basic Reads

// Retrieve all users
const allUsers: User[] = await prisma.users()

// Retrieve a single user by email
const bob: User = await prisma
.users({ email: "bob@prisma.is" })

// Retrieve all comments of a post in a single request
const commentsOfPost: Comment[] = await priisma
.post({ id: "cjl4..." })
.comments()

# Filtering & Sorting

// Fetch all published posts about GraphQL by authors with Prisma-email
const posts = await prisma.posts({
where: {
published: true,
title_constains: "GraphQL"
suthor: {
email_ends_with: "@prisma.io"
}
},
orderBy: "createdAt_ASC"
})
