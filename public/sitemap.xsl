<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/1999/xhtml"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - DailyEcho</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #333;
            background: #f5f5f5;
            margin: 0;
            padding: 0;
          }
          .header {
            background: #d61935;
            color: white;
            padding: 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 32px;
          }
          .header p {
            margin: 10px 0 0 0;
            font-size: 16px;
            opacity: 0.9;
          }
          .container {
            max-width: 1200px;
            margin: 30px auto;
            padding: 0 20px;
          }
          .info-box {
            background: white;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .info-box h2 {
            margin-top: 0;
            color: #d61935;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          th {
            background: #0f0f0f;
            color: white;
            padding: 15px;
            text-align: left;
            font-weight: 600;
          }
          td {
            padding: 15px;
            border-bottom: 1px solid #eee;
          }
          tr:hover {
            background: #f9f9f9;
          }
          a {
            color: #d61935;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .url-cell {
            word-break: break-all;
          }
          .priority {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
          }
          .priority-high {
            background: #d61935;
            color: white;
          }
          .priority-medium {
            background: #ffa500;
            color: white;
          }
          .priority-low {
            background: #999;
            color: white;
          }
          .count {
            font-size: 14px;
            color: #666;
            margin-bottom: 15px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🗺️ XML Sitemap</h1>
          <p>DailyEcho - Your Source for News</p>
        </div>
        <div class="container">
          <div class="info-box">
            <h2>About This Sitemap</h2>
            <p>This is an XML Sitemap Index containing links to all sitemap files for DailyEcho. It is used by search engines like Google, Bing, and Yahoo to discover and index content efficiently.</p>
          </div>
          
          <xsl:if test="sitemap:sitemapindex">
            <div class="count">
              <strong>Total Sitemaps: </strong>
              <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Sitemap</th>
                  <th>Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <tr>
                    <td class="url-cell">
                      <a href="{sitemap:loc}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          
          <xsl:if test="sitemap:urlset">
            <div class="count">
              <strong>Total URLs: </strong>
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
            </div>
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Priority</th>
                  <th>Change Frequency</th>
                  <th>Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td class="url-cell">
                      <a href="{sitemap:loc}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:choose>
                        <xsl:when test="sitemap:priority &gt; 0.7">
                          <span class="priority priority-high">
                            <xsl:value-of select="sitemap:priority"/>
                          </span>
                        </xsl:when>
                        <xsl:when test="sitemap:priority &gt; 0.4">
                          <span class="priority priority-medium">
                            <xsl:value-of select="sitemap:priority"/>
                          </span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="priority priority-low">
                            <xsl:value-of select="sitemap:priority"/>
                          </span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td>
                      <xsl:value-of select="sitemap:changefreq"/>
                    </td>
                    <td>
                      <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
