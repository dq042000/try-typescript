// ---------- 基本類型 ----------

let myname = "mike";
let myname2: string;
myname2 = "mike";

let num: number = 1000;
let boo: boolean = true;
let n: null = null;
let un: undefined = undefined;

// 陣列
let arr: string[] = ["a", "b"];
let arr2: string[][] = [["a", "b"]];

// 元組
let tuple: [number, string, boolean] = [1, "a", true];
let tuple2: [string, string][] = [["a", "b"]];

// ---------- Enum 枚舉 ----------

// 開直播api -> 獲取直播狀態
// 成功 失敗 直播中
// 0 -1 1

enum LiveStatue {
    SUCCESS = 0,
    FAIL = -1,
    STREAMING = 1,
}

const staus = LiveStatue.SUCCESS;
console.log(staus);

// ---------- Union ----------

let aaa: number | string; // 可以是數字 或 字串

// ---------- type 自定義類型 ----------

type A = number | string;
type B = boolean | string;

let a1: A;
a1 = 888;
a1 = "123";

let a2: B;
a2 = true;
a2 = "123";

// ---------- interface 介面 ----------

interface User {
    name: string;
    age: number;
}

// ---------- object 物件 ----------

// 不能擴充
type Card = {
    name: string;
    desc: string;
};

// 可以擴充(繼承)
interface Card2 {
    name: string;
    desc: string;
}
interface Card2 {
    age?: number; // 加 ? 可輸入 或 不輸入
}

const obj: Card2 = {
    name: "mike",
    desc: ".....",
    age: 70,
};

// ---------- function ----------

// 參數
// function hello () {}
// 可以指定參數的類型
function hello(a: string, b: string) {
    return a + b;
}

// : number 返回 數字 類型
function hello2(a: string, b: string): number {
    console.log(a, b);
    return 999;
}

function hello3(a: number, b: boolean, c: string) {
    return 100;
}

// undefined
function test2(a: number) {
    console.log(a);
}

// age? 加 ? 可輸入 或 不輸入
// 通常加 ? 的參數要放在最後面
function hello4(name: string, age?: number) {
    // let a: number;
    // a = age;

    if (age === undefined) return -1;
    test2(age);
    return;
}

// 箭頭函式
const func = () => {};

// ---------- 斷言 as unknown ----------

type Data = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = (await res.json()) as Data;
}

const data1: Data = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
};

type Beta = {
    name: string;
};

// 假設data1是動態的
const beta = data1 as unknown as Beta;

// ---------- class ----------

// private      私有(class本身才可以使用)
// public       公開
// protected    受保護(class本身 或是 繼承class 才可以使用)

class Live {
    public roomName: string;
    private id: string;
    protected name: string;

    constructor(roomName1: string, id1: string, name1: string) {
        console.log("建立直播中....");
        this.roomName = roomName1;
        this.id = id1;
        this.name = name1;
    }
}

class CarLive extends Live {
    constructor(roomName1: string, id1: string, name1: string) {
        super(roomName1, id1, name1);
    }
}

const live = new Live("1號", "000001", "mike");
console.log("live", live);

const carLive = new CarLive("2號", "000002", "mike2");
console.log("carLive", carLive);

class Live2 {
    #name; // 私有變數
    constructor(name: string) {
        this.#name = name;
    }
}

// 完全沒辦法訪問 name
const live2 = new Live2("live2");
console.log(live2);

//
interface CarProps {
    name: string;
    age: number;
    start: () => void;
}

class Car implements CarProps {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    start() {}
}

// ---------- 泛型 ----------

// 使用時再指定參數是什麼類型
// T 可以自定義名稱
function print<T>(data: T) {
    console.log("log", data);
}

print<number>(999);
print<string>("mike");
print<boolean>(true);

//
class Pring<T> {
    data: T;
    constructor(d: T) {
        this.data = d;
    }
}
const p1 = new Pring<number>(9999);
console.log("p1", p1);
const p2 = new Pring<string>("mike");
console.log("p2", p2);

// ---------- utility ----------

// --- Record
interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

// key
// value
const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
console.log(cats);

// --- Pick(選擇)
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
};
console.log(todo);

// --- Omit(過濾)
interface Todo2 {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreview2 = Omit<Todo2, "description">;

const todo2: TodoPreview2 = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
};
console.log(todo2);
