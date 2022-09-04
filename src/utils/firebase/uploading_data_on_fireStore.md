# To Upload the Categories data up in the Firestore :

First, we're going to need to bring in a couple of methods.

1. **The first one,** we need is we need the Collection.

The first one that we need is we need the collection.

So collection actually is a new one from Firestorm off.

It's from Firestorm.

Because Firestorm is what governs our database.

So we need both the collections method and we need the right batch method.

And I'm going to explain to you what both of these are.

First, the collection method is the most important.

We need the collection method because it will actually allow us the same way when we were getting a

document reference to get a collection reference because we're trying to write to a brand new collection.

So here what I'm going to do is I am going to create a new function and I'm going to call it add collection

and documents because that's what we're doing.

We're adding in some new collection as well as the actual documents inside of that collection.

So what I want to call this for my first variable that I'm going to pass in is the collection key.

This is going to be that key that we saw inside of our DB.

So, for example, this collection has users as the key.

We want one that has categories as the key.

So we're going to pass that as a string.

But this is just what I'm calling a collection key.

And then the next argument is going to be the actual documents that we want to add.

So here, let's just call them objects because they're really just JSON objects.

So we'll call it objects to add.

And this is our function.

The other thing to remember is because we're adding to an external source, this is most likely going

to be a bunch of async behavior because we're essentially calling out up onto an API in order to store

data.

So this is async.

What we want to do now is I want to think about how it is that we actually create the collection, because

right now it doesn't exist.

But as we learned with user document references, as long as we try and find something in the database,

Firebase is actually going to create one for us, even if it's not populated, because that's what the

document references in our particular case.

Now we're making a collection reference.

So here I'm going to say const collection reference is equal to collection passing in our DB because

we're saying, hey, go with our DB instance as we know we did with Auth.

This is exactly what we're doing with Firestorm as well.

We have one DB Singleton instance and we're saying, Hey, get me the collection within the DB and within

this DB.

What's specific collection key are you looking for?

Well, this is going to be the collection key that we pass in.

So you can imagine that when we actually call this function, we're going to give it categories.

So now that we have our collection reference, what are we going to do with this?

Well, now what we have to do is we need to think about how to store each of these objects now inside

of this new collection ref as a new document.

Now we are writing multiple different documents into a collection.

So for us to do this, we need to actually think about this concept of transactions.

A transaction is a word that represents a successful unit of work to a database.

Now a unit of work differs.

It might be multiple sets of setting values into a collection.

For us, we consider a successful write to this collection if all of the documents successfully wrote

to that database.

This means that there are numerous rights involved in this one single transaction.

The single transaction being we stored all of the objects into this collection.

The reason why you want to think about transactions like this is easily demonstrated when you think

about a bank.

If you imagine and let's just use some examples.

Let's say that we were a bank and we had a database that included me and any bank account was $1,000.

Then for Andre, he also had 1000.

We are two instances in the bank's database.

Let's say that I wanted to transfer $100 from my bank account to Andre's bank account.

What needs to happen on the database is that this database needs to see -100 on this value.

So setting this value should go to 900.

But Andre's bank account needs to see a plus 100, meaning that his value in the database must go up

to 100.

As a result, these are two different rights, which means both of these rights have to go through in

order for this transaction of me transferring $100 to Andre to be deemed as a successful transaction.

This is considered one unit of work.

Even though there are two separate right events happening, there is a -100 that is writing to the database

so that my 1000 becomes 900 and there's a separate right.

So that Andre's 1000 becomes 1100.

If only my -100 happened and Andre's 1000 stays the same.

This is not a successful transaction because this means that my account lost money.

But Andre did not gain money, so that money disappeared.

This is the concept of a transaction, meaning that if Andre's right to the database where writing this

to 100 for some reason failed, then this entire transaction failed, meaning that my right gets overturned

so that both accounts are back where they were before the transaction ever started.

Only now is it possible for you to attempt this.

Maybe when your network is more secure or whatever issues that cause this to happen is fixed.

This is the concept of a transaction.

So we want to do the same thing.

We want to make sure that all of our objects that we're trying to add to the collection are successfully

added.

And to do that, we need to use a batch.

So a batch is what we get from that right batch method that we also import it from Firestorm.

So how to use this and continue building out our ad collection documents is what we're going to cover

in the next video.

But now all you need to know is that we just created some collection.

We've got the collection reference.

Now it's time to batch write these objects to there.

So join me in the next video where we'll figure out how to use batch.

collection in one successful transaction.

So to do this, we need to use that right batch method that we imported from Firebase Firestorm.

So here, how to use it is we need to instantiate a batch class by saying, Hey, I want to make a batch

and this batch is going to call.

Right batch.

Right batch is going to return me a batch and we have to pass it the database that we're trying to make

this batch on.

So as you've seen with this trend, we just always pass the database to whatever these methods that

we've imported are.

So now that I have this batch instance, what batch allows me to do is attach a bunch of different,

let's say, writes, deletes, sets, whatever.

We can attach all of those to the batch.

And only when we're ready to fire off the batch does the actual transaction begin.

So what we need to do is we need to create a bunch of set methods or not set methods, but set events

because each of these objects were saying, Hey, I want you to create and set that object into this

collection as a new document for me.

So to do that, what we're going to do is we're going to say, Hey, objects to add for each.

So for each of these objects, I want you to batch set for me.

So here we're going to receive this object.

And if you remember, this object is inside of the shop data.

It's each of these category objects here with the title and the items array.

This is what we're adding in.

So each of these is the object and we have five, as you can see here, five different objects.

So how we're going to do this is inside of Firebase Utils again with this object.

Now I first want to get the document reference.

So to get the document reference, I'm going to make one called doc ref.

And this is equal to calling the doc method which we've done before when we got the user doc method

except in passing it.

DB I'm going to pass it the collection ref because the collection ref actually tells directly this doc

method which database we're using because we've got this collection ref from calling collection where

the DB was already passed.

So this doc is smart enough to know, Oh, you're giving me a collection ref?

Most likely you got it because you've already told that collection ref what DB it's from.

So then with this collection ref, what we also need to get this document is the title or the key.

What is the value?

The key value here.

So here these are actually the title on the object.

So I'm going to say, hey, give me object, give me the title, but then lowercase it because right

now it's in normal case, meaning the first letter is capitalized.

Then what we want to do is we want to say, okay, I want you to batch set.

On this document reference because as we know.

Firebase will give us back a document reference, even if it doesn't exist yet.

It will just point to that place for this specific key inside of our collection.

And now what we're saying is, hey, set that location and set it with the value of the object itself.

You can pass it some JSON object and it will build out that structure for you and this is our entire

batch.

Then what we need to do is we need to await actually firing off this batch because what happened is

that we iterate it over each individual object in the array.

We added an additional batch set call on there, creating a new document reference for each of those

objects where the key is the title and the value is the object itself.

So now we say batch commit and this will begin firing it off.

And then when we're done we can just quickly console.log done to ourselves.

So we know it's finished.

So I want to save this.

I want to come over to my products context and then I want to import it in.

So I want to import in add collection and documents from.

R utils slash.

Firebase slash firebase.

Utils.

And then what we want to do is we want to fire this off once.

So one important thing here is I'm going to use a use effect.

And for this use effect, what I'm going to say is just use effect should fire only once.

And what we fire is this ad collection documents with both the string of categories, because that's

the name that I want for the collection.

And then we're going to pass the shop data as the actual objects we're trying to add.

So now what I want to do is I want to save this and inside just make sure that it ran successfully.

If it did, we should see done, which we do.

Now, if we go back to our fire store and we refresh what we see, we should see the new categories

collection here.

Which we do.

And inside we see our different documents that reflect our different categories now.

So there we go.

What I also want to do, though, is make sure that I delete this use effect, because every time you

run it, it's going to try and set new values inside of the database, which we don't want to do.

We just want it to do this as a one off thing.

Typically what happens is you wouldn't do this on your front end, but just for us, because we're only

controlling it on the front end and we have access to all these documents, I figured it's a good time

for you to at least see how you might interact with Firebase when it comes to storing values in your

database.

And we also learned about Batch along the way.

So now that we're done with these, we don't need these values anymore.

I'm going to keep this import and this use effect because in the next lesson, it's actually important

for us because what we need to work on now that the data is inside of our store is to pull that data

down.

But at the very least, we now have the data inside a fire store and we now have some method that we

can utilize.

If you don't want it to be title, you can make this more generic because here right now we're saying,

Hey, directly, I'm going to pull this off of objects to add when in fact this might not always be

present on these objects.

I know that I said this would be generic, but in this particular case here, we just wanted to use

the title to get this through.

In your particular case, you can pass some additional field value which designates which of these values

you want to use.

So here you could do it like so like that.

And then now you just pass the field in as a third argument.

So in our particular case, this would have been equal to the string of title.

That's another way you can do this to make this work.

You can also pass this dynamically inside if you want as well.

There's numerous ways you can do this, but for us, at the very least, with what we needed, we just

needed to get the title.

But here we have this inside of our fire store, and now that we have our data and fire store, let's

pull it into our application and figure out how to use it.

So with that, I'll see in the next video.