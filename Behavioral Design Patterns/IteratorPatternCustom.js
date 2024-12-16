class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(node) {
    this.children.push(node);
  }
}

function* traverseTree(node) {
  yield node.value;
  for (const child of node.children) {
    yield* traverseTree(child);
  }
}

const root = new TreeNode("Root");
const child1 = new TreeNode("Child 1");
const child2 = new TreeNode("Child 2");
root.addChild(child1);
root.addChild(child2);

for (const value of traverseTree(root)) {
  console.log(value); // Logs 'Root', 'Child 1', 'Child 2'
}
