"use strict";
// ---------- 基本類型 ----------
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Live2_name;
let myname = "mike";
let myname2;
myname2 = "mike";
let num = 1000;
let boo = true;
let n = null;
let un = undefined;
// 陣列
let arr = ["a", "b"];
let arr2 = [["a", "b"]];
// 元組
let tuple = [1, "a", true];
let tuple2 = [["a", "b"]];
// ---------- Enum 枚舉 ----------
// 開直播api -> 獲取直播狀態
// 成功 失敗 直播中
// 0 -1 1
var LiveStatue;
(function (LiveStatue) {
    LiveStatue[LiveStatue["SUCCESS"] = 0] = "SUCCESS";
    LiveStatue[LiveStatue["FAIL"] = -1] = "FAIL";
    LiveStatue[LiveStatue["STREAMING"] = 1] = "STREAMING";
})(LiveStatue || (LiveStatue = {}));
const staus = LiveStatue.SUCCESS;
console.log(staus);
// ---------- Union ----------
let aaa; // 可以是數字 或 字串
let a1;
a1 = 888;
a1 = "123";
let a2;
a2 = true;
a2 = "123";
const obj = {
    name: "mike",
    desc: ".....",
    age: 70,
};
// ---------- function ----------
// 參數
// function hello () {}
// 可以指定參數的類型
function hello(a, b) {
    return a + b;
}
// : number 返回 數字 類型
function hello2(a, b) {
    console.log(a, b);
    return 999;
}
function hello3(a, b, c) {
    return 100;
}
// undefined
function test2(a) {
    console.log(a);
}
// age? 加 ? 可輸入 或 不輸入
// 通常加 ? 的參數要放在最後面
function hello4(name, age) {
    // let a: number;
    // a = age;
    if (age === undefined)
        return -1;
    test2(age);
    return;
}
// 箭頭函式
const func = () => { };
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = (yield res.json());
    });
}
const data1 = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
};
// 假設data1是動態的
const beta = data1;
// ---------- class ----------
// private      私有(class本身才可以使用)
// public       公開
// protected    受保護(class本身 或是 繼承class 才可以使用)
class Live {
    constructor(roomName1, id1, name1) {
        console.log("建立直播中....");
        this.roomName = roomName1;
        this.id = id1;
        this.name = name1;
    }
}
class CarLive extends Live {
    constructor(roomName1, id1, name1) {
        super(roomName1, id1, name1);
    }
}
const live = new Live("1號", "000001", "mike");
console.log("live", live);
const carLive = new CarLive("2號", "000002", "mike2");
console.log("carLive", carLive);
class Live2 {
    constructor(name) {
        _Live2_name.set(this, void 0); // 私有變數
        __classPrivateFieldSet(this, _Live2_name, name, "f");
    }
}
_Live2_name = new WeakMap();
// 完全沒辦法訪問 name
const live2 = new Live2("live2");
console.log(live2);
class Car {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    start() { }
}
// ---------- 泛型 ----------
// 使用時再指定參數是什麼類型
// T 可以自定義名稱
function print(data) {
    console.log("log", data);
}
print(999);
print("mike");
print(true);
//
class Pring {
    constructor(d) {
        this.data = d;
    }
}
const p1 = new Pring(9999);
console.log("p1", p1);
const p2 = new Pring("mike");
console.log("p2", p2);
// key
// value
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
console.log(cats);
const todo = {
    title: "Clean room",
    completed: false,
};
console.log(todo);
const todo2 = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
};
console.log(todo2);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDZCQUE2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3BCLElBQUksT0FBZSxDQUFDO0FBQ3BCLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFFakIsSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFDO0FBQ3ZCLElBQUksR0FBRyxHQUFZLElBQUksQ0FBQztBQUN4QixJQUFJLENBQUMsR0FBUyxJQUFJLENBQUM7QUFDbkIsSUFBSSxFQUFFLEdBQWMsU0FBUyxDQUFDO0FBRTlCLEtBQUs7QUFDTCxJQUFJLEdBQUcsR0FBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMvQixJQUFJLElBQUksR0FBZSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFcEMsS0FBSztBQUNMLElBQUksS0FBSyxHQUE4QixDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdEQsSUFBSSxNQUFNLEdBQXVCLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUU5QyxnQ0FBZ0M7QUFFaEMsbUJBQW1CO0FBQ25CLFlBQVk7QUFDWixTQUFTO0FBRVQsSUFBSyxVQUlKO0FBSkQsV0FBSyxVQUFVO0lBQ1gsaURBQVcsQ0FBQTtJQUNYLDRDQUFTLENBQUE7SUFDVCxxREFBYSxDQUFBO0FBQ2pCLENBQUMsRUFKSSxVQUFVLEtBQVYsVUFBVSxRQUlkO0FBRUQsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztBQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRW5CLDhCQUE4QjtBQUU5QixJQUFJLEdBQW9CLENBQUMsQ0FBQyxhQUFhO0FBT3ZDLElBQUksRUFBSyxDQUFDO0FBQ1Ys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