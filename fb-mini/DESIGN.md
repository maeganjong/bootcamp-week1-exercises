# Planned Database Schema

users:
- number - userid
- string - firstname
- string - lastname
- date - date of birth
- string - password
- string - short bio
- string - relationship status

posts:
- userid - references the users table (foreign key)
- string - text
- date - postdate
- number - likes

friends:
- userid - requester - references the users table (foreign key)
- userid - acceptor - references the users table (foreign key)
- date - date requested
- enum - status (updte on your own)

hashtags:
- number - id
- string - hashtag

hashtag_post:
- postid - foreign key - references post
- hashtagid - foreign key - references hashtag