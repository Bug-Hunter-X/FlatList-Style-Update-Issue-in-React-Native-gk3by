# React Native FlatList Style Update Issue

This repository demonstrates a common issue encountered when working with dynamic styles in React Native's FlatList component. The problem arises when styles change due to state updates, but the FlatList fails to reflect these changes, resulting in stale styles being displayed.

The provided code shows the bug and its solution. The `FlatListBug.js` file demonstrates the problematic implementation, while `FlatListBugSolution.js` provides a working solution. The solution involves using `keyExtractor` and `extraData` props for efficient re-rendering.

## Setup

1. Clone this repo
2. Run `npm install`
3. Run `npx react-native run-android` or `npx react-native run-ios`