# Vue_practice

20241130

1. 增加 vue data 帶入 html 欄位
2. 增加 data 欄位與 input 的雙向綁定
3. 增加 input 與 input 之間的雙向綁定
4. 增加在 js 使用 template，需要在 html 留下空位，讓 template 去填
5. 增加 methods 與 computed 使用，另外增加日幣兌換台幣 input 用 v-model 綁定 jpy，注意 computed 不能帶入 funciont 參數，因此有需要帶入的還是使用 methods，但是 coputed 效能較佳，會減少重複進行的次數
6. 增加利用 computed 使用 get 與 set，利用 get 將 twd 做加工計算，後續使用 set 寫入 twd 的值，相對也能增加其他幣值
7. 利用 v-bind 控制按鍵的狀態 disable，使用 v-model 控制表單中的 radio 與 checkbox 並顯示在畫面
