<script setup lang="ts">
import { shallowRef } from 'vue';
import dayjs from 'dayjs';

const __BUILD_TIME__ = import.meta.env.VITE_BUILD_TIME;

const Contact = shallowRef({
  Github: 'https://github.com/Kuriyota',
  Bilibili: 'https://space.bilibili.com/650631530',
  X: 'https://x.com/cn_Kuriyota',
  Zhihu: 'https://www.zhihu.com/people/cn-chestnut',
  Telegram: 'https://t.me/Kuriyota',
  'Kuriyota@outlook.com': 'mailto:kuriyota@outlook.com'
});
</script>

<template>
  <div class="-index font-mono flex justify-center h-full">
    <main class="w-160 my-20 p-4 flex flex-col gap-4">
      <img
        class="w-10 rounded-sm"
        src="https://avatars.githubusercontent.com/u/98728485" />
      <h1 class="text-2xl">
        I'm Kuriyota
        <span class="text-gray-500">(Kuriyona)</span>
      </h1>
      <p>
        A 17-year-old Chinese senior high school student, otaku, casual anime
        fan, MtF, and intrest-driven developer.
      </p>
      <div>
        <p>· Location: Hangzhou, Zhejiang, the P.R.China ( 120° E, 30° N )</p>
        <p>· Birthday: June 28th (2008)</p>
        <p>
          · Tech stack : JavaScript/TypeScript (Vue, Node/Bun, Elysia),
          HTML/CSS, C#
        </p>
        <p>· Language: Mandarin Chinese, English & Japanese (Learning)</p>
      </div>
      <p>
        I am the founder of
        <a href="https://github.com/SharpDotNUT/" target="_blank">
          #.NUT Studio
        </a>
        ,
        <br />
        and my project ：
        <a
          href="https://github.com/SharpDotNUT/Prototype-YunHan"
          target="_blank">
          「Prototype · YunHan」
        </a>
      </p>
      <hr />
      <div>
        You can find me on
        <br />
        <p v-for="(link, name) in Contact">
          <span>·&nbsp;</span>
          <a :key="name" :href="link" target="_blank">
            {{ name }}
          </a>
        </p>
        <p>· Wechat : @Kuriyota</p>
        <p>· QQ: ID 2946733291</p>
      </div>
      <hr />
      <div class="flex gap-2 pb-2 overflow-x-auto">
        <img src="https://hoyocard.qhy04.com/gs/0/306863519.png" />
        <img src="https://hoyocard.qhy04.com/sr/2/306863519.png" />
        <img src="https://hoyocard.qhy04.com/zzz/0/306863519.png" />
      </div>
      <hr />
      <div>
        <p>
          · Build time :
          {{ dayjs(__BUILD_TIME__).format('YYYY-MM-DD HH:mm:ss') }}
        </p>
        <p>
          · Last update :
          {{ dayjs('2025-11-22').format('YYYY-MM-DD') }}
        </p>
        <p>
          · OpenSource (MIT) :
          <a href="https://github.com/Kuriyota/Kuriyota.com">
            Kuriyota/Kuriyota.com
          </a>
        </p>
        <p>
          · Copyright © {{ dayjs().format('YYYY') }} Kuriyota. All rights
          reserved.
        </p>
      </div>
    </main>
  </div>
</template>

<style lang="css" scoped></style>
