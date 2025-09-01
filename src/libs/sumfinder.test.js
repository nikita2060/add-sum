import { findsum } from './sumfinder';
//edge case
test("returns 0 for empty array",()=>{
    expect(findsum([])).toBe(0);
});
//happy path
test("returns sum for aarray elements ",()=>{
    expect(findsum([1,2,3,4])).toBe(10)
});

test("work as usual for neagtive numbers too",()=>{
    expect(findsum([1,2,-1,3])).toBe(5)
})
