/*
 * @Author: huangxingyuan
 * @Date: 2021-01-04 23:39:10
 * @LastEditors: huangxingyuan
 * @LastEditTime: 2021-01-04 23:46:13
 * @Description: 文件功能描述
 */
// 给出一个完全二叉树，求出该树的节点个数。

// 说明：

// 完全二叉树的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2h 个节点。

// 示例:

// 输入: 
//     1
//    / \
//   2   3
//  / \  /
// 4  5 6

// 输出: 6

var countNodes = function(root) {
    if(!root) return 0
 let count  = 0;

 let queue = [root]
 while(queue.length){
     let len = queue.length
     for(let i = 0; i < len;i++){
         count++
         let val = queue.shift()
         if(val.left) queue.push(val.left)
         if(val.right) queue.push(val.right)
     }
 }
 return count
}