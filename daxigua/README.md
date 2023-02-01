# 수박게임

**성명서, 이 프로젝트는 모든 사람이 기술과 엔터테인먼트를 배우는 데 도움이 될 뿐이며 침해를 피하기 위해 수정된 웹사이트를 대규모로 확산 및 상업화하지 않습니다.！**

> 가장 간단한 마법 변경 "수박게임" 출시, 지도 수정 도구 탑재, 코드 변경 필요 없이 구성만 수정！
>
> 도움이 되셨다면 별표 부탁드려요 궁금한점은 위챗으로 연락주세요：liyupi66
> 
> 저자의 프로그래밍 기술 공식 계정[『 프로그래머 피쉬 스킨 』](https://mp.weixin.qq.com/s/H9VR1MWn-9bKSC_1l_MkJw)，欢迎关注 ❤️
>
> 문제가 발생하면 이 문서의 마지막 [문제 및 해결 방법]을 먼저 읽으십시오(#문제 및 해결 방법).)

자세한 튜토리얼: [마법 개혁 및 수박 게임 시작, 가장 완벽한 튜토리얼！](https://mp.weixin.qq.com/s/H9VR1MWn-9bKSC_1l_MkJw)

비디오 튜토리얼: [수정에서 출시까지 전체 네트워크에서 가장 친밀한 마술 개혁 수박 게임 튜토리얼！](https://www.bilibili.com/video/BV1Vy4y1n7KW/)

수정되지 않은 온라인 플레이：[https://daxigua.liyupi.com](https://daxigua.liyupi.com)

매직 버전 온라인 플레이：[https://dadaxigua.liyupi.com](https://dadaxigua.liyupi.com)

수정되지 않은 소스 코드：[https://github.com/liyupi/daxigua/releases/tag/1.0.0](https://github.com/liyupi/daxigua/releases/tag/1.0.0)

🔥 [다시 매핑의 효율성을 두 배로 늘리는 큰 수박 다시 매핑 도구를 새로 출시했습니다.！](https://daxigua-tools.liyupi.com)

![친구 서클을 과시하십시오.](./assets/dadaxigua.png)

### 목차

- [로컬 시작](#로컬 시작)

- [퀵 체인지](#퀵 체인지)

- [온라인 출시](#온라인 출시)

- [마법 개혁의 원리](#마법 개혁의 원리)

- [문제와 해결책](#문제와 해결책)


### 로컬 시작

> 두 가지 로컬 시작 방법을 제공합니다. 和 Docker，Xiaobai는 첫 번째 것을 사용할 것을 권장합니다.

#### Xiaobai 적용

1. 설치하다 serve 工具：

    ```bash
    npm i -g serve
    ```

2. 进入 daxigua 目录，运行 serve：

    ```bash
    serve
    ```
   
3. 打开浏览器访问 localhost:5000 即可！

#### 已安装 Docker

> 感谢 [buchenglei](https://github.com/buchenglei) 的贡献

1. 构建镜像
    
    ```bash
    docker build -t daxigua-server .
    ```

2. 启动容器

    ```bash
    docker run -d --name play-daxigua -p5000:5000 daxigua-server
    ```

### 퀵 체인지

> 아래 지침에 따라 수정하고 계속 추가하십시오.

1. 점수 변경: extraSettings.js 파일 변경

2. 그림 변경: res/raw-assets 디렉토리 아래 지정된 디렉토리에 있는 그림을 교체합니다.파일 이름, 접미사 및 크기가 동일해야 합니다. 성공적인 덮어쓰기가 적용됩니다. [교체 가능한 자료 문서](https://docs.qq.com/sheet/DS0d2VVVJYmpvZ0pZ)

3. 무적 모드: extraSettings.js 파일 변경

4. 첫 번째 과일 지정: extraSettings.js 파일 변경

5. 표시할 다음 과일 지정: extraSettings.js 파일 변경

6. 큰 과일에서 작은 과일 합성: extraSettings.js 파일 변경

7. 과일을 더 Q-바운싱하게 만들기: extraSettings.js 파일을 변경합니다. [원칙 참조](https://docs.cocos.com/creator/api/zh/classes/PhysicsCircleCollider.html?h=circlecollider)

8. 과일 낙하 속도가 느려짐: extraSettings.js 파일 변경, [원리 참조](https://docs.cocos.com/creator/manual/zh/physics/physics/rigid-body.html?h=%E5%88%9A%E4%BD%93)

9. 대체 음악: res/raw-assets 디렉토리에 동일한 음악을 덮어씁니다. [대체 자료 문서](https://docs.qq.com/sheet/DS0d2VVVJYmpvZ0pZ)

10. 배경 교체 : 그림을 바꾸는 것과 원리는 동일, [교체 가능한 자료 문서](https://docs.qq.com/sheet/DS0d2VVVJYmpvZ0pZ)

11. 광고 제거: 광고 이미지를 [동일한 배경색 베이스맵]으로 교체(https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/0.png)

12. 광고 링크 교체: extraSettings.js 파일 변경

13. 웹사이트 제목 변경: extraSettings.js 파일 변경

14. 선택 팝업창 열기: extraSettings.js 파일 변경

15. 오른쪽 상단 아이콘을 클릭하여 과일 변경: extraSettings.js 파일 변경


### 온라인 출시

> Tencent Cloud 원클릭 배포, Vercel, Tencent Cloud 정적 웹 사이트 호스팅, GitHub Pages 등과 같은 다양한 온라인 게시 방법을 제공합니다. Xiaobai는 Vercel 사용을 권장합니다.

#### Tencent Cloud Webify의 원클릭 배포

Tencent Cloud Webify는 개인 창고에 대한 템플릿 복제, 애플리케이션 배포, 코드 업데이트 후 자동 재배포 트리거를 지원합니다.

아래 버튼을 클릭하세요.

[![](https://cloudbase.net/deploy.svg)](https://console.cloud.tencent.com/webify/new?tpl=https%3A%2F%2Fgithub.com%2Fliyupi%2Fdaxigua&reponame=daxigua)

애플리케이션 구성은 다음과 같습니다.

- **构建命令** 与 **安装命令** 为空
- **输出目录** 填为 `.`

![](https://main.qcloudimg.com/raw/8ca88a49907cd6f2657084d9a63def15.png)

그런 다음 애플리케이션 배포를 클릭합니다.


#### Vercel

适用于零基础的小白。操作简单、域名简短，但国外的服务器，比较慢。

Vercel 是免费网站托管平台，可以帮我们部署网站，并生成可访问的简短网址，还能够和自己购买的域名进行绑定。

先在命令行通过 npm 命令安装 Vercel：

```
npm install -g vercel
```

安装完成后，进入 `index.html` 所在目录（我的是 daxigua），使用 `vercel` 命令发布网站：

```
cd daxigua
vercel --prod
```

然后会让你输入一些选项，比如项目名称、是否和已有项目关联、是否保存当前配置等。如果要创建多个项目，千万不要和已有项目关联！

发布成功，会得到一个网址，打开就可以看到游戏啦，还可以把网址分享给别人！

#### 腾讯云静态网站托管

国内服务器，访问速度更快，且链接未被微信封杀。

地址：https://cloud.tencent.com/product/wh

可以参照这篇文章的内容尝试发布，[魔改和上线你的수박게임，最全教程！](https://mp.weixin.qq.com/s/H9VR1MWn-9bKSC_1l_MkJw)


### 魔改原理

请先阅读：[魔改和上线你的수박게임，最全教程！](https://mp.weixin.qq.com/s/H9VR1MWn-9bKSC_1l_MkJw)

我给 `project.js` 文件补充了注释，大家可以搜索关键字，如 "改分" 来快速定位，学习修改原理。

### 问题及解决

1. 无法安装 serve 或者 Vercel？

    答：如果报找不到 npm，请先安装 npm。

    如果安装中卡住，试着按下键盘（可能假死），还不行的话先用 npm 安装 cnpm（国内镜像，比较快）：
    
    ```bash
    npm install cnpm -g --registry=https://registry.npm.taobao.org 
    ```
    
    再用 cnpm 安装： `cnpm i -g serve` 或 `cnpm i -g vercel`
    
2. Vercel 网址被微信拦截怎么办？
   
    答：可以把网址复制到浏览器打开，也可以申请一个域名，在 Vercel 和服务提供商配置域名解析。
    Vercel 基本是海外的服务器，无需备案。

3. 怎么在电脑上浏览网页游戏？
   
    答：在浏览器中，按 F12 打开开发者工具，点击像手机一样的图标即可。
    
4. 为什么 serve 后，打开网页一片空白？

    答：大概率是你在错误的目录下执行了 serve，请务必在 index.html 所在的文件夹下执行 serve。

5. 执行 vercel 命令显示 signUp？

    答：要先去 [Vercel 官网](https://vercel.com/) 注册。

6. vercel 邮箱验证失败？

    答：先确认邮箱是否正确，如果验证失败，大概率是网络原因，请尝试 4G 等网络。或者在其他浏览器中，打开邮箱，点击验证按钮。

7. 怎么使用 vercel 同时上线多个版本？

    答：在输入 vercel 后，选择不和已有项目关联（link），并且使用一个新的项目名（project name）。

8. 想在修改文件后重新搞个新版本，但输入 vercel prod 后，直接覆盖了，而没有让我选择是否和现有项目关联（link），怎么办？
    
    答：执行 vercel 后，会在本地生成 `.vercel` 隐藏目录保存之前的发布信息，删掉该目录即可。

9. 导出网址后，我修改了图片，然后游戏中还是原来的图片？
    
    答：网址读取的是远程的文件，只改了本地当然没用！再次执行 vercel 或腾讯云命令，把最新文件传上去。
    
10. Mac 能否使用这个教程呢？
    
    答：当然可以！所有命令和 windows 完全一致！只是 cmd 命令行工具改为用 terminal 终端（按 command + 空格，搜索 terminal）
 
11. 为什么打开网站白屏了？
    
    答：大概率是你修改错误，导致一些文件缺失。。可以试试重新下载代码，再修改，请先确保本地可以运行，再发布！
