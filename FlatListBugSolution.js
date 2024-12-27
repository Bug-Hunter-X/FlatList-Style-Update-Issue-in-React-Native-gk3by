The solution involves using the `keyExtractor` and `extraData` props of the FlatList component.  `keyExtractor` ensures that each item has a unique key, while `extraData` forces a re-render when the relevant state changes.  Here's an example:

```javascript
<FlatList
  data={data}
  keyExtractor={(item, index) => index.toString()}
  extraData={this.state}
  renderItem={({ item }) => (
    <View style={[
      styles.itemContainer,
      item.selected ? styles.selectedItem : null,
    ]}>
      {/* ... item content ... */}
    </View>
  )}
/>
```
By using a unique key and passing the state as `extraData`, the FlatList will correctly re-render and display the updated styles.