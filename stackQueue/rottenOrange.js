//We have 2d array
// [
//     [2,1,1],
//     [1,1,0],
//     [0,1,2],
// ]
//so if 2=(x,y)
//we need to find
// right= (x+1 , y)
// left= (x-1 , y)
// top=  (x , y-1)
// botttom=  (x , y+1)

//But we can have mutliple two's in an matrix so what we can do is we can use BFS approach using queue
//Mark rotten oranges in queue by traversing through array
//let q=[(0,0) , (2,2)]

// now we will traverse in queue and mark rltb of it as rotten  if that is equal to 1 (fresh orange) and while adding any new rotten orange we will add that in our queue
// so for (0,0) we can go to (0,1) & (1,0) and both have value as one so we will mark that as 2 and  add those in queue
// // let q [(0,0) , (2,2) , (0,1) , (1,0)] and remove my first (0,0) from queue because that is visited already so no need to check again
// q= [  (2,2) , (0,1) , (1,0)]

//SLoution

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  //First add all rottens in queue
  let m = grid.length; //rows
  let n = grid[0]?.length; //columns
  let q = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 2) {
        q.push([i, j, 0]); //0 here represents level/minutes pass
      }
    }
  }
  let maxMin = 0;
  //Mark ajacent node as rotten & push in q
  while (q.length) {
    let [x, y, min] = q.shift(); //We will fetch min for every node in queue

    //Fresh orange at left side
    if (x > 0 && grid[x - 1][y] == 1) {
      grid[x - 1][y] = 2;
      q.push([x - 1, y, min + 1]);
    }

    //Fresh orange at right side
    if (x < m - 1 && grid[x + 1][y] == 1) {
      grid[x + 1][y] = 2;
      q.push([x + 1, y, min + 1]);
    }

    //Fresh orange at top side
    if (y > 0 && grid[x][y - 1] == 1) {
      grid[x][y - 1] = 2;
      q.push([x, y - 1, min + 1]);
    }

    //Fresh orange at bottom side
    if (y < n - 1 && grid[x][y + 1] == 1) {
      grid[x][y + 1] = 2;
      q.push([x, y + 1, min + 1]);
    }

    maxMin = Math.max(min, maxMin);
  }

  //Final run loop to check if any 1 is pending or not
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        return -1;
      }
    }
  }

  return maxMin;
};
