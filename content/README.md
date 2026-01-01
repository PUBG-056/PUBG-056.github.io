# 內容管理說明

這個資料夾用於管理部落格的所有內容，使用 YAML 格式儲存。

## 資料夾結構

- `articles/` - 文章，每個 YAML 檔案對應一篇文章

## 文章格式

在 `articles/` 資料夾中建立 YAML 檔案，例如 `次世代遊戲引擎革命-虛幻引擎-5-5-深度解析.yaml`：

```yaml
id: "1"
title: "文章標題"
excerpt: "文章摘要"
category: "遊戲"  # 遊戲、科技、評測
date: "2025-01-15"
readTime: "8 分鐘"
imageUrl: "/attached_assets/generated_images/image.png"
content: |
  # 文章標題
  
  文章內容可以使用 **Markdown** 語法撰寫。
```

**重要**：
- **檔案名稱就是 URL slug**：檔案名稱（不含 `.yaml` 或 `.yml` 副檔名）會自動用作文章 URL
- `imageUrl` 必須以 `/attached_assets/` 開頭
- `content` 欄位支援完整的 Markdown 語法
- `category` 可以是：`遊戲`、`科技`、`評測`

## 生成內容

每次修改 YAML 檔案後，執行以下命令重新生成內容：

```bash
npm run content:generate
```

或者在開發時，內容會自動生成：

```bash
npm run dev
```

或者在建置時，內容會自動生成：

```bash
npm run build
```

## Markdown 支援

所有 `content` 欄位都支援完整的 Markdown 語法：

- 標題（# ## ###）
- **粗體** 和 *斜體*
- 列表（有序和無序）
- 程式碼區塊和行內程式碼
- 引用
- 連結和圖片
- 表格（透過 GFM 擴展）

## 注意事項

1. **檔案名稱就是 URL**：檔案名稱（不含 `.yaml` 或 `.yml` 副檔名）會自動成為文章的 URL slug
2. 檔案名稱必須是唯一的，建議使用有意義的中文名稱或英文名稱
3. 圖片 URL 必須以 `/attached_assets/` 開頭
4. 每次修改內容後記得執行 `npm run content:generate` 或重新啟動開發伺服器
5. **所有新增功能已移除**：內容只能透過編輯 YAML 檔案來管理

