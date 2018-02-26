# Publishing `architizer-design-kit`

You should be familiar with [semantic versioning](https://semver.org/) and GitHub's [Releases feature](https://help.github.com/articles/about-releases/).

There are three commands that `npm` provides for versioning:
```bash
$ npm version patch
>> v1.0.0 -> v1.0.1
$ npm version minor
>> v1.0.0 -> v1.1.0
$ npm version major
>> v1.0.0 -> v2.0.0
```

On your feature branch, when you are ready to tag a version, you should:
1. Pull the latest master with `git pull origin master`
2. After all your commits are done, increment the version for `design-kit` with one of the `npm version` commands.
3. When pushing, *make sure to use `git push --follow-tags origin <feature-branch>`*. git tags are not pushed by default
4. When this branch is merged into `master`, CircleCI will run `npm publish` which will publish the latest tag to the npm registry.
