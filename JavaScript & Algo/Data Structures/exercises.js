
class UniqeArray
{
    constructor()
    {
        this.items=[];
    }
    add(item)
    {
        if (!this.exists(item))
            this.items.push(item);
    }
    showAll()
    {
        console.log(this.items.slice());
    }
    exists(item)
    {
        for (const existing of this.items) {
      if (this.isEqual(existing, item)) {
        return true;
      }
    }
    return false;
    }
    get(index)
    {
        if (index >=0 && index <this.items.length)
            return this.items[index];
        return -1;
    }
    isEqual(a, b) {
    if (a === b) return true;

    if (typeof a !== typeof b) return false;
    if (a == null || b == null) return false;

    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      return a.every((x, i) => this.isEqual(x, b[i]));
    }

    if (typeof a === "object") {
      const aKeys = Object.keys(a);
      const bKeys = Object.keys(b);
      if (aKeys.length !== bKeys.length) return false;
      return aKeys.every(
        key => b.hasOwnProperty(key) && this.isEqual(a[key], b[key])
      );
    }

    return false;
  }
}

function EX1()
{
    const uniqueStuff = new UniqeArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
console.log(uniqueStuff.exists("toy")) //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
}

function main()
{
  console.log("EX1 results:");
  EX1();
}



main();