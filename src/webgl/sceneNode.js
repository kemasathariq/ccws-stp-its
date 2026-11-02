import { compose, multiply } from './mat4.js';

// A node holds a local transform, an optional mesh, and children. Its world matrix is
// parentWorld · local, so moving a parent moves every child with it.
export function createNode(name, { position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1], mesh = null } = {}) {
  return { name, position, rotation, scale, mesh, children: [] };
}

export function addChildren(parent, ...children) {
  parent.children.push(...children);
  return parent;
}

export function traverse(node, parentWorld, visit) {
  const world = multiply(parentWorld, compose(node.position, node.rotation, node.scale));
  visit(node, world);
  for (const child of node.children) traverse(child, world, visit);
}
