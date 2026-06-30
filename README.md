# OTSIGNGEN PWA สำหรับ GitHub Pages

## สิ่งที่ต้องมีใน Google Apps Script
ใน `Code.gs` ใช้ `doGet()` ดังนี้ แล้วกด **Deploy > Manage deployments > Edit > New version > Deploy**

```javascript
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('ระบบสร้างใบลงเวลา')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
```

การ Deploy ต้องกำหนด **Who has access = Anyone** (หรือระดับสิทธิ์ที่บุคลากรผู้ใช้งานเข้าถึงได้) เพื่อให้ PWA เปิดระบบได้

## วิธีนำขึ้น GitHub Pages
1. แตกไฟล์ ZIP นี้
2. เข้า GitHub repository `OTSIGNGEN`
3. ลบไฟล์ `index.html` เดิมที่เป็นข้อความ Code.gs ออก
4. อัปโหลดไฟล์และโฟลเดอร์ทั้งหมดจาก ZIP นี้ลงที่ root ของ repository
5. Commit changes
6. ไปที่ **Settings > Pages** แล้วเลือก Deploy from a branch: `main` และโฟลเดอร์ `/ (root)`
7. รอประมาณ 1–2 นาที แล้วเปิด `https://jumpon097.github.io/OTSIGNGEN/`
8. กด `Ctrl + F5` หนึ่งครั้งเพื่อข้ามไฟล์แคชเดิม

## จุดสำคัญ
- `Code.gs` อยู่ใน Apps Script เท่านั้น ไม่ต้องนำไปวางใน GitHub
- GitHub ต้องมี `index.html` จากชุดนี้ จึงจะแสดง PWA และฝัง GAS ได้
- PWA ทำหน้าที่เป็นเปลือก/ทางเข้า ส่วนข้อมูล การอัปโหลด และการสร้างใบลงเวลายังทำงานบน GAS
- ขณะไม่มีอินเทอร์เน็ต จะเปิดเฉพาะเปลือก PWA ได้ แต่ใช้งานระบบสร้างใบลงเวลาไม่ได้
