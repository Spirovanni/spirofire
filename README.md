# spirofire

You can propose changes (add it to the Index) using

## git add *

This is the first step in the basic git workflow. To actually commit these changes use

## git commit -m "Commit message"

Your changes are now in the HEAD of your local working copy. To send those changes to your remote repository, execute 

## git push origin master

or to branch

## git push origin sandbox2

create a new branch named "feature_x" and switch to it using

## git checkout -b feature_x

switch back to master

## git checkout master

and delete the branch again

## git branch -d feature_x

a branch is not available to others unless you push the branch to your remote repository

## git push origin <branch>
