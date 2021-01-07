import { map } from 'bluebird';

const nums: number[] = [];
for(let i = 1; i <= 100; i++){
    nums.push(i);
}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const fn = async (num: number) => {
    await delay(3000);
    console.log('num: ', num);
}

const concurrency = 10;
map(nums, fn, { concurrency });
