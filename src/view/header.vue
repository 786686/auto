<template>
  <div>
    <!-- 头部 -->
    <header>
      <div class="header-l">
        <a href="javascript:void(0);" @click="handleRouter('index')">
          <div class="logo">
            <img src="../assets/logo.png" alt />
          </div>
          <div class="company-info">广州腾信智联网络科技有限公司<div class="company-en"><span class="international">Guangzhou Tengxin Intelligent Networking Technology Co., Ltd.</span></div>
          </div>
        </a>
      </div>
      <nav class="nav">
        <ul>
          <li>
            <a href="javascript:void(0);" @click="handleRouter('index')">首页<span class="international">(Home Page)</span></a>
          </li>
          <li>
            <a href="javascript:void(0);" @click="handleRouter('service')">我们的服务<span class="international">(Our Services)</span></a>
          </li>
          <li>
            <a href="javascript:void(0);" @click="handleRouter('info')">资讯<span class="international">(Information)</span></a>
          </li>
          <li>
            <a href="javascript:void(0);" @click="handleRouter('win')">共赢<span class="international">(All-Win)</span></a>
          </li>
        </ul>
      </nav>
    </header>
    <div class="header-occupy"></div>
  </div>
</template>