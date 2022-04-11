# ProUnlimited
Assessment test for Pro Unlimited

# Question1.js  - contains solution for first problem
Problem Statement:
1.	Minimum Remove to Make Valid Parentheses

Given a string s of '(' , ')' and lowercase English characters.
Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
Formally, a parentheses string is valid if and only if:

•	It is the empty string, contains only lowercase characters, or
•	It can be written as AB (A concatenated with B), where A and B are valid strings, or
•	It can be written as (A), where A is a valid string.
 
Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"
Example 3:

Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
 
Constraints:

•	1 <= s.length <= 105
•	s[i] is either'(' , ')', or lowercase English letter.
 





# Question2.js  - contains solution for second problem

In between his coding assignments, John is visiting a neighborhood garage sale to purchase some items for his home.

However, some items are junk and have a negative price — their owners are happy to pay someone to take them away. John has a big truck and can take up to M items. He can only make one trip and needs your help to maximize the money he can make.


Input
The first line of input contains an integer M, representing the maximum number of items that John can carry in his truck.
The second line of input contains an integer N, representing the number of items for sale.
The third line of input contains N space-separated integers, representing the array elements as prices of the available items.


Output
Print the maximum amount of money that John can earn.


Constraints
1 ≤ M ≤ N ≤ 100
-1000 ≤ arri  ≤ 1000


Example #1
Input
1 
2
-1 -10
Output
10
Explanation: In this case, there are two items, and they are both junk. Their owners are happy to pay $1 for one item and $10 for the other. However, since John can take at most one item with him, he can earn a maximum of $10.

 Example #2
Input
2
3
10 20 30
Output
0
Explanation: In this case, there are three different items. But the sellers are not giving away money for taking them. So John cannot earn anything.

