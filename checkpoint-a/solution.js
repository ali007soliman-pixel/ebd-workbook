// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

// TODO: export the five functions spec.md asks for:
export async function loadOrders() {
  const orders = await findAllOrders();
  return orders;
}
export function myOrders(orders) {
  return orders.filter((order) => order.city === "Giza" && order.status === "cancelled");
}
export function summarize(orders) {
  return orders.reduce((biggest, order) => Math.max(biggest, order.price), 0);
}
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student} ordered ${order.quantity} x ${order.item}`;
  } catch (error) {
    return `Order ${id} not found`;
  }
}
export function toJsonLines(orders) {
  return JSON.stringify(orders.map((order) => ({ student: order.student, item: order.item })));
}
//
// Nothing is started for you this time. Everything you need is in modules
// 00 to 08.
