/* ============================================================
   IT ENGLISH QUIZ — 8 Unit Công nghệ thông tin
   Cấu trúc giống script.js gốc: window.U (4 phần/unit: bank, vocab, lang, read)
   ============================================================ */
window.U = {};
const mc = (q, opts, ans, why, no, tip, o) =>
  Object.assign(
    { k: "mc", q, opts, ans: [].concat(ans), why, no, tip },
    o || {},
  );
const tf = (q, a, why, tip) => ({
  k: "mc",
  tf: 1,
  fixed: 1,
  q,
  opts: ["True", "False"],
  ans: [a ? 0 : 1],
  why,
  tip,
  no: a
    ? "Chọn **False** là sai vì phát biểu này KHỚP với nội dung bài / kiến thức."
    : "Chọn **True** là sai vì phát biểu này KHÔNG khớp với nội dung bài / kiến thức.",
});
const fl = (q, ans, why, tip) => ({ k: "fl", q, ans, why, tip });
const ms = (q, opts, ans, why, tip) => ({
  k: "ms",
  q,
  opts,
  ans,
  why,
  tip,
  fixed: 1,
});
/* match: pairs=[[A, correct B text, tip]] ; o.B = explicit B list (keeps doc order + letters) ; o.alt={index:[extra accepted B texts]} */
function match(t, ins, pairs, o) {
  o = o || {};
  const B = o.B || pairs.map((p) => p[1]);
  const fixed = !!o.B;
  const owner = {};
  pairs.forEach((p) => {
    owner[p[1]] = p[0];
  });
  const items = pairs.map((p, pi) => {
    const ai = B.indexOf(p[1]);
    const acc = [ai];
    ((o.alt && o.alt[pi]) || []).forEach((x) => acc.push(B.indexOf(x)));
    return {
      k: "mc",
      match: 1,
      fixed,
      q: p[0],
      opts: B,
      ans: acc,
      why: `**${p[0]}** ↔ **${p[1]}**.` + (p[2] ? " " + p[2] : ""),
      no: B.map((b, bi) =>
        acc.includes(bi)
          ? null
          : owner[b]
            ? `"${b}" là nghĩa/đáp án của **${owner[b]}**, không phải của "${p[0]}".`
            : `"${b}" không khớp với "${p[0]}".`,
      ),
      tip: p[3] || null,
    };
  });
  return Object.assign({ t, ins, items, isMatch: 1 }, o.x || {});
}

U[1] = {
  name: "Software Engineering",
  vi: "Kỹ thuật phần mềm",
  icon: "💻",
  sec: {
    vocab: [
      {
        t: "Bài 1 · Chọn từ đúng",
        ins: "Choose the best word to complete each sentence.",
        insvi: "Chọn thuật ngữ kỹ thuật phần mềm phù hợp nhất.",
        items: [
          mc(
            "The team wrote a detailed ___ describing exactly what the system must do.",
            ["specification", "debugger", "rollback"],
            0,
            "**specification** = bản đặc tả, mô tả hệ thống phải làm gì.",
            "Specification = đặc tả (spec).",
          ),
          mc(
            "A ___ translates source code into machine code before the program runs.",
            ["compiler", "repository", "stakeholder"],
            0,
            "**compiler** = trình biên dịch.",
            "compile = biên dịch.",
          ),
          mc(
            "We use a ___ to find and fix errors line by line.",
            ["debugger", "wireframe", "license"],
            0,
            "**debugger** = trình gỡ lỗi (de-bug = bỏ lỗi).",
            "de + bug = gỡ lỗi.",
          ),
          mc(
            "Before merging, a colleague must do a ___ of your code.",
            ["code review", "deadline", "milestone"],
            0,
            "**code review** = rà soát mã trước khi hợp nhất.",
            "review = xem xét lại.",
          ),
          mc(
            "Every change is stored in the ___, so we can see the full history.",
            ["repository", "prototype", "sprint"],
            0,
            "**repository** = kho mã nguồn, lưu toàn bộ lịch sử.",
            "repo = kho.",
          ),
          mc(
            "The new release failed, so the team decided to ___ to the previous version.",
            ["roll back", "roll out", "round up"],
            0,
            "**roll back** = quay lui về phiên bản trước.",
            "roll back ≠ roll out.",
          ),
          mc(
            "Quick shortcuts that make future changes harder create ___ debt.",
            ["technical", "social", "financial"],
            0,
            "**technical debt** = nợ kỹ thuật.",
            "Làm nhanh bây giờ, trả giá sau.",
          ),
          mc(
            "The software must handle more users as the company grows. This is called ___.",
            ["scalability", "usability", "portability"],
            0,
            "**scalability** = khả năng mở rộng khi tải tăng.",
            "scale = quy mô.",
          ),
          mc(
            "A short development cycle in Scrum is called a ___.",
            ["sprint", "backlog", "branch"],
            0,
            "**sprint** = chu kỳ phát triển ngắn trong Scrum.",
            "Sprint = chạy nước rút.",
          ),
          mc(
            "Testing individual functions in isolation is called ___ testing.",
            ["unit", "acceptance", "regression"],
            0,
            "**unit test** kiểm thử từng đơn vị nhỏ.",
            "unit = đơn vị.",
          ),
          mc(
            "A list of all remaining work items for a project is the product ___.",
            ["backlog", "pipeline", "merge"],
            0,
            "**backlog** = danh sách công việc tồn.",
            "back + log = việc chất đống phía sau.",
          ),
          mc(
            "When two people edit the same lines, Git reports a merge ___.",
            ["conflict", "release", "patch"],
            0,
            "**merge conflict** = xung đột khi hợp nhất.",
            "conflict = xung đột.",
          ),
        ],
      },
      match(
        "Bài 2 · Nối thuật ngữ với định nghĩa",
        "Match each term with its definition.",
        [
          ["bug", "an error in a program"],
          ["patch", "a small update that fixes a problem"],
          ["framework", "a ready-made structure for building software"],
          ["stakeholder", "a person with an interest in the project"],
          ["prototype", "an early sample used to test an idea"],
          ["refactoring", "improving code without changing its behaviour"],
          ["deployment", "putting software into use"],
          ["legacy system", "an old system still in use"],
        ],
        {
          B: [
            "an old system still in use",
            "putting software into use",
            "an error in a program",
            "a small update that fixes a problem",
            "a person with an interest in the project",
            "an early sample used to test an idea",
            "improving code without changing its behaviour",
            "a ready-made structure for building software",
          ],
        },
      ),
    ],
    lang: [
      {
        t: "Bài 1 · Thể bị động",
        ins: "Choose the correct passive form.",
        insvi: "Ngữ pháp: câu bị động trong tài liệu kỹ thuật.",
        items: [
          mc(
            "The code ___ by two reviewers last week.",
            ["was checked", "is checked", "checked"],
            0,
            "last week → quá khứ đơn bị động: **was checked**.",
            "Bị động = be + V3.",
          ),
          mc(
            "All bugs ___ before the release next Friday.",
            ["will be fixed", "are fixing", "fixed"],
            0,
            "Tương lai bị động: **will be fixed**.",
            "will be + V3.",
          ),
          mc(
            "The application ___ in Java.",
            ["is written", "writes", "is writing"],
            0,
            "Sự thật chung bị động: **is written**.",
            "is/are + V3.",
          ),
          mc(
            "The tests ___ every night by the server.",
            ["are run", "run by", "are running"],
            0,
            "Thói quen hiện tại bị động: **are run**.",
            "run là V3 của run.",
          ),
          mc(
            "The old module ___ yet.",
            ["has not been replaced", "did not replace", "is not replacing"],
            0,
            "Hiện tại hoàn thành bị động: **has not been replaced**.",
            "has/have been + V3.",
          ),
          mc(
            "The database ___ at the moment.",
            ["is being updated", "is updated", "has updated"],
            0,
            "Đang diễn ra → **is being updated**.",
            "is being + V3.",
          ),
          mc(
            "The requirements ___ before coding started.",
            ["had been approved", "have approved", "were approving"],
            0,
            "Trước mốc quá khứ → **had been approved**.",
            "had been + V3.",
          ),
          mc(
            "The report ___ to the manager every Monday.",
            ["is sent", "sends", "is sending"],
            0,
            "Thói quen bị động: **is sent**.",
            "send → sent.",
          ),
          mc(
            "New features ___ in the next version.",
            ["will be added", "will add", "are adding"],
            0,
            "Tương lai bị động: **will be added**.",
            "Dùng will be + V3.",
          ),
          mc(
            "The system ___ by a small team in 2020.",
            ["was built", "built", "is built"],
            0,
            "Mốc 2020 → **was built**.",
            "build → built.",
          ),
        ],
      },
      {
        t: "Bài 2 · Điền dạng đúng của động từ",
        ins: "Complete each sentence with the correct form of the verb in brackets.",
        insvi: "Gõ dạng đúng (chia thì hoặc bị động).",
        items: [
          fl(
            "The bug ___ (fix) yesterday.",
            [["was fixed"]],
            "yesterday + bị động → **was fixed**.",
            "was + V3.",
          ),
          fl(
            "Our team ___ (use) Scrum since 2022.",
            [["has used", "has been using"]],
            "since + mốc → **has used / has been using**.",
            "since → hiện tại hoàn thành.",
          ),
          fl(
            "The tests ___ (run) now, please wait.",
            [["are running"]],
            "now → **are running**.",
            "Đang diễn ra.",
          ),
          fl(
            "If the build fails, the team ___ (investigate) the cause.",
            [["will investigate"]],
            "Câu điều kiện loại 1 → **will investigate**.",
            "If + hiện tại, will + V.",
          ),
          fl(
            "If we had more testers, we ___ (find) more bugs.",
            [["would find"]],
            "Điều kiện loại 2 → **would find**.",
            "If + quá khứ, would + V.",
          ),
          fl(
            "The code ___ (review) before it is merged.",
            [["is reviewed", "must be reviewed"]],
            "Bị động hiện tại → **is reviewed**.",
            "is + V3.",
          ),
          fl(
            "We ___ (finish) the module by Friday.",
            [["will have finished", "will finish"]],
            "Hạn chót tương lai → **will have finished**.",
            "by + mốc → hoàn thành.",
          ),
        ],
      },
    ],
    read: [
      {
        t: "Bài 1 · A day in a software team",
        ins: "Read the text and answer the questions.",
        ctx: `Our team of six engineers builds a booking app for a travel company. We work in two-week sprints. Every morning we hold a short stand-up meeting where each person says what they did yesterday and what they will do today.

All code is stored in a shared repository. Before anything is merged, another developer reviews it. This catches many bugs early and also spreads knowledge across the team. We also write unit tests, and an automated tool runs them every time someone commits code.

At the end of each sprint we release a new version to a small group of users first. If problems appear, we roll back quickly. Then, in the retrospective, we discuss what went well and what to improve. Last year, technical debt slowed us down, so we now spend one day per sprint on refactoring.`,
        items: [
          tf(
            "The team works in two-week sprints.",
            true,
            'Đoạn 1: "two-week sprints".',
            "two-week = hai tuần.",
          ),
          tf(
            "The stand-up meeting is long and held once a month.",
            false,
            "Đoạn 1: họp **ngắn, hằng ngày**.",
            "short + every morning.",
          ),
          tf(
            "The team has six engineers.",
            true,
            'Đoạn 1: "six engineers".',
            "six = sáu.",
          ),
          tf(
            "Code is merged without any review.",
            false,
            "Đoạn 2: phải có người khác review trước khi merge.",
            "before merged → review.",
          ),
          tf(
            "Unit tests are run automatically after a commit.",
            true,
            "Đoạn 2: công cụ tự động chạy test mỗi lần commit.",
            "automated = tự động.",
          ),
          tf(
            "New versions are first released to all users at once.",
            false,
            "Đoạn 3: phát hành cho **nhóm nhỏ** trước.",
            "small group first.",
          ),
          tf(
            "The retrospective is used to discuss improvements.",
            true,
            "Đoạn 3: thảo luận điều tốt và cần cải thiện.",
            "retrospective = nhìn lại.",
          ),
          tf(
            "The team ignores technical debt.",
            false,
            "Đoạn 3: dành một ngày mỗi sprint để refactor.",
            "one day per sprint.",
          ),
          mc(
            "What kind of app does the team build?",
            ["A booking app", "A game", "A bank website", "A weather tool"],
            0,
            "Đoạn 1: **booking app** cho công ty du lịch.",
            "booking = đặt chỗ.",
          ),
          mc(
            "What does each person say at the stand-up?",
            [
              "What they did and will do",
              "Their salary",
              "Their holiday plans",
              "Nothing",
            ],
            0,
            "Đoạn 1: việc đã làm hôm qua và sẽ làm hôm nay.",
            "stand-up = báo cáo ngắn.",
          ),
          mc(
            "Why is code reviewed?",
            [
              "To catch bugs and share knowledge",
              "To delete tests",
              "To slow the project",
              "To save money on tools",
            ],
            0,
            "Đoạn 2: bắt lỗi sớm và chia sẻ kiến thức.",
            "review = lợi ích kép.",
          ),
          mc(
            "Who runs the unit tests?",
            ["An automated tool", "The manager", "The user", "A tester only"],
            0,
            "Đoạn 2: automated tool.",
            "automated tool.",
          ),
          mc(
            "What does the team do if a release has problems?",
            [
              "Roll back quickly",
              "Ignore it",
              "Close the project",
              "Add more features",
            ],
            0,
            'Đoạn 3: "roll back quickly".',
            "roll back = quay lui.",
          ),
          mc(
            "What happens in the retrospective?",
            [
              "The team reviews what went well",
              "Code is deployed",
              "Users are tested",
              "Bugs are hidden",
            ],
            0,
            "Đoạn 3: thảo luận điều tốt và cần cải thiện.",
            "retro = nhìn lại.",
          ),
          mc(
            "Why did the team begin refactoring regularly?",
            [
              "Technical debt slowed them down",
              "They had no tests",
              "The app was finished",
              "Users asked for it",
            ],
            0,
            "Đoạn 3: nợ kỹ thuật làm chậm tiến độ.",
            "debt → refactor.",
          ),
          mc(
            "How often is a new version released?",
            ["At the end of each sprint", "Every day", "Once a year", "Never"],
            0,
            "Đoạn 3: cuối mỗi sprint.",
            "end of each sprint.",
          ),
          mc(
            "Where is the code stored?",
            [
              "In a shared repository",
              "On paper",
              "On each laptop only",
              "In an email",
            ],
            0,
            "Đoạn 2: shared repository.",
            "shared = chung.",
          ),
          mc(
            'The word "catches" in paragraph 2 is closest to:',
            ["finds", "loses", "writes", "hides"],
            0,
            "catch bugs = phát hiện lỗi.",
            "catch = bắt được.",
          ),
        ],
      },
    ],
  },
};
/*--------------------------------------------------------------------------------------------------------------*/
U[2] = {
  name: "Web & Mobile Development",
  vi: "Lập trình Web & Di động",
  icon: "📱",
  sec: {
    vocab: [
      {
        t: "Bài 1 · Chọn từ đúng",
        ins: "Choose the best word to complete each sentence.",
        insvi: "Chọn thuật ngữ web/di động phù hợp nhất.",
        items: [
          mc(
            "The ___ is the part of a website that users see and click.",
            ["front-end", "back-end", "database"],
            0,
            "**front-end** = giao diện người dùng.",
            "front = phía trước.",
          ),
          mc(
            "The ___ handles data and logic on the server.",
            ["back-end", "front-end", "layout"],
            0,
            "**back-end** = xử lý phía máy chủ.",
            "back = phía sau.",
          ),
          mc(
            "A website that adjusts to any screen size has a ___ design.",
            ["responsive", "static", "legacy"],
            0,
            "**responsive design** = thiết kế đáp ứng.",
            "respond = phản hồi.",
          ),
          mc(
            "The browser sends a ___ to the server and waits for a response.",
            ["request", "cookie", "template"],
            0,
            "**request** = yêu cầu gửi tới máy chủ.",
            "request ↔ response.",
          ),
          mc(
            "A ___ stores small pieces of data about a visitor in the browser.",
            ["cookie", "server", "compiler"],
            0,
            "**cookie** = tệp lưu thông tin nhỏ trong trình duyệt.",
            "cookie web ≠ bánh quy.",
          ),
          mc(
            "Logging in with a password is called ___.",
            ["authentication", "navigation", "animation"],
            0,
            "**authentication** = xác thực danh tính.",
            "authentic = thật.",
          ),
          mc(
            "Pages load faster when images are loaded only when needed. This is ___ loading.",
            ["lazy", "heavy", "blind"],
            0,
            "**lazy loading** = tải chậm theo nhu cầu.",
            "lazy = lười.",
          ),
          mc(
            "An app that works on both Android and iOS is ___.",
            ["cross-platform", "offline", "native"],
            0,
            "**cross-platform** = đa nền tảng.",
            "cross = xuyên qua.",
          ),
          mc(
            "An app built only for one operating system is a ___ app.",
            ["native", "hybrid", "static"],
            0,
            "**native app** = ứng dụng gốc.",
            "native = bản địa.",
          ),
          mc(
            "The app asks for ___ to use the camera.",
            ["permission", "latency", "a layout"],
            0,
            "**permission** = quyền truy cập.",
            "permit = cho phép.",
          ),
          mc(
            "A short message that appears even when the app is closed is a ___ notification.",
            ["push", "pull", "pop"],
            0,
            "**push notification** = thông báo đẩy.",
            "push = đẩy tới.",
          ),
          mc(
            "A free ___ lets developers test apps on a computer instead of a phone.",
            ["emulator", "cookie", "domain"],
            0,
            "**emulator** = trình giả lập thiết bị.",
            "emulate = mô phỏng.",
          ),
          mc(
            "The app ___ every time I open the camera. Please fix it.",
            ["crashes", "scrolls", "updates"],
            0,
            "**crash** = treo / thoát đột ngột.",
            "crash = đâm sầm.",
          ),
          mc(
            "Developers submit new apps to the ___ for approval.",
            ["app store", "data lake", "firewall"],
            0,
            "**app store** = cửa hàng ứng dụng.",
            "store = cửa hàng.",
          ),
          mc(
            "A page address such as example.com is a ___ name.",
            ["domain", "host", "menu"],
            0,
            "**domain name** = tên miền.",
            "domain = lãnh địa.",
          ),
          mc(
            "The time between a click and the response is called ___.",
            ["latency", "bandwidth", "resolution"],
            0,
            "**latency** = độ trễ.",
            "late = muộn.",
          ),
          mc(
            "A sketch showing where buttons and text go is a ___.",
            ["wireframe", "cache", "plugin"],
            0,
            "**wireframe** = khung sườn bố cục.",
            "wire + frame.",
          ),
          mc(
            "A website can use a ___ to remember the last page visited.",
            ["cache", "keyboard", "sensor"],
            0,
            "**cache** = bộ nhớ đệm.",
            'cache đọc là "cát-sờ".',
          ),
        ],
      },
      match(
        "Bài 2 · Nối thuật ngữ với định nghĩa",
        "Match each term with its definition.",
        [
          ["HTML", "the language that structures web pages"],
          ["CSS", "the language that styles web pages"],
          ["JavaScript", "the language that makes pages interactive"],
          ["API", "a way for programs to talk to each other"],
          ["JSON", "a simple format for exchanging data"],
          ["SDK", "a toolkit for building apps"],
          ["endpoint", "a URL where an API receives requests"],
          ["framework", "a ready-made structure for building apps"],
          ["plugin", "an add-on that extends a program"],
          ["viewport", "the visible area of a web page"],
        ],
        {
          B: [
            "a way for programs to talk to each other",
            "the language that styles web pages",
            "the language that structures web pages",
            "a simple format for exchanging data",
            "the language that makes pages interactive",
            "a toolkit for building apps",
            "a URL where an API receives requests",
            "an add-on that extends a program",
            "the visible area of a web page",
            "a ready-made structure for building apps",
          ],
        },
      ),
    ],
    lang: [
      {
        t: "Bài 1 · Câu điều kiện",
        ins: "Choose the correct form.",
        insvi: "Ngữ pháp: câu điều kiện loại 1, 2 và dạng bị động.",
        items: [
          mc(
            "If the page loads slowly, users ___ leave.",
            ["will", "would have", "are"],
            0,
            "Điều kiện loại 1: If + hiện tại, **will** + V.",
            "Loại 1 = có thể xảy ra.",
          ),
          mc(
            "If I ___ more time, I would add dark mode.",
            ["had", "have", "will have"],
            0,
            "Loại 2: If + quá khứ → **had**.",
            "Loại 2 = không có thật.",
          ),
          mc(
            "If the server ___ down, the site stops working.",
            ["goes", "will go", "went"],
            0,
            "Sự thật chung: If + hiện tại → **goes**.",
            "If + present simple.",
          ),
          mc(
            "The button ___ by the user when the form is complete.",
            ["is clicked", "clicks", "is clicking"],
            0,
            "Bị động hiện tại: **is clicked**.",
            "is + V3.",
          ),
          mc(
            "The app ___ downloaded one million times so far.",
            ["has been", "was", "is"],
            0,
            "so far → **has been** (hiện tại hoàn thành).",
            "so far = cho đến nay.",
          ),
          mc(
            "The site ___ redesigned last month.",
            ["was", "is", "has"],
            0,
            "last month → **was** redesigned.",
            "Mốc xác định = quá khứ đơn.",
          ),
          mc(
            "We ___ working on the mobile version since January.",
            ["have been", "are", "were"],
            0,
            "since January → **have been working**.",
            "since + mốc.",
          ),
          mc(
            "Unless the app is updated, it ___ work on new phones.",
            ["will not", "would not have", "did not"],
            0,
            "Unless = if not → **will not**.",
            "Unless = nếu không.",
          ),
          mc(
            "The developers ___ the bug by tomorrow.",
            ["will have fixed", "fixed", "are fixing"],
            0,
            "by tomorrow → **will have fixed**.",
            "Hạn tương lai.",
          ),
          mc(
            "Users can choose ___ they want to receive notifications.",
            ["whether", "whatever", "whenever"],
            0,
            "**whether** = liệu có... hay không.",
            "whether = có hay không.",
          ),
          mc(
            "The page ___ be accessible to everyone.",
            ["must", "mustn’t to", "can to"],
            0,
            "**must** + V = bắt buộc.",
            "Modal + V nguyên mẫu.",
          ),
          mc(
            "You ___ to enter a password to log in.",
            ["have", "has", "having"],
            0,
            "You **have** to + V.",
            "have to = phải.",
          ),
          mc(
            "The app is ___ than the old version.",
            ["faster", "more fast", "fastest"],
            0,
            "fast → **faster** (so sánh hơn).",
            "Tính từ ngắn + er.",
          ),
          mc(
            "This is the ___ app I have ever used.",
            ["best", "most good", "better"],
            0,
            "good → **best** (so sánh nhất).",
            "good–better–best.",
          ),
          mc(
            "Mobile apps are ___ useful than websites for games.",
            ["more", "most", "much"],
            0,
            "**more useful** (adj dài).",
            "more + adj dài.",
          ),
          mc(
            "The user ___ the app and the screen froze.",
            ["opened", "has opened", "was opening"],
            0,
            "Chuỗi sự kiện quá khứ → **opened**.",
            "Quá khứ đơn.",
          ),
        ],
      },
      {
        t: "Bài 2 · Điền dạng đúng",
        ins: "Complete each sentence with the correct form of the word in brackets.",
        insvi: "Gõ dạng đúng của từ.",
        items: [
          fl(
            "If you ___ (click) this link, it opens the page.",
            [["click"]],
            "Sự thật chung → **click**.",
            "If + hiện tại.",
          ),
          fl(
            "The website ___ (visit) by millions every day.",
            [["is visited"]],
            "Bị động → **is visited**.",
            "is + V3.",
          ),
          fl(
            "The new app ___ (release) next week.",
            [["will be released"]],
            "Tương lai bị động → **will be released**.",
            "will be + V3.",
          ),
          fl(
            "The page ___ (be) built by a small team in 2021.",
            [["was"]],
            "Quá khứ bị động → **was** built.",
            "was built.",
          ),
          fl(
            "This layout looks ___ (good) than the old one.",
            [["better"]],
            "good → **better**.",
            "good–better–best.",
          ),
          fl(
            "The app is ___ (easy) to use than before.",
            [["easier"]],
            "easy → **easier**.",
            "y → ier.",
          ),
          fl(
            "We ___ (test) the app since Monday.",
            [["have been testing", "have tested"]],
            "since → **have been testing**.",
            "since + mốc.",
          ),
          fl(
            "If I had a bigger screen, I ___ (watch) videos.",
            [["would watch"]],
            "Loại 2 → **would watch**.",
            "If + quá khứ → would.",
          ),
          fl(
            "The button ___ (not/work) when I tapped it.",
            [["didn't work", "did not work"]],
            "Quá khứ phủ định → **didn’t work**.",
            "did not + V.",
          ),
          fl(
            "The developer ___ (write) the code while the designer was drawing.",
            [["was writing", "wrote"]],
            "**was writing / wrote**.",
            "Hai hành động song song.",
          ),
        ],
      },
    ],
    read: [
      {
        t: "Bài 1 · Building a mobile app",
        ins: "Read the text and answer the questions.",
        ctx: `Nam is a developer who builds apps for small businesses. His latest project is a food-ordering app for a local restaurant. The customers wanted something simple: browse the menu, place an order, and pay online.

First, Nam drew wireframes to plan each screen. Then he chose a cross-platform framework so one codebase could work on both Android and iOS. This saved time and money. The back-end stores menus and orders in a database, and the app talks to it through a REST API.

During testing, an emulator helped him check different screen sizes. However, the app crashed on some older phones, so Nam fixed the problem and tested again. Before the launch, the app was submitted to the app store. After approval, the restaurant sent a push notification to announce a free-delivery week. Within a month, the app had been downloaded more than 5,000 times.`,
        items: [
          tf(
            "Nam builds apps for large international companies.",
            false,
            "Đoạn 1: cho **doanh nghiệp nhỏ**.",
            "small businesses.",
          ),
          tf(
            "The app lets customers browse the menu and pay online.",
            true,
            "Đoạn 1: duyệt menu, đặt hàng, thanh toán online.",
            "browse, order, pay.",
          ),
          tf(
            "Nam started by writing the final code.",
            false,
            "Đoạn 2: vẽ **wireframe** trước.",
            "First = wireframes.",
          ),
          tf(
            "One codebase works on Android and iOS.",
            true,
            "Đoạn 2: framework đa nền tảng.",
            "cross-platform.",
          ),
          tf(
            "The app talks to the back-end through a REST API.",
            true,
            "Đoạn 2: REST API.",
            "REST API.",
          ),
          tf(
            "The app worked perfectly on all old phones.",
            false,
            "Đoạn 3: bị crash trên vài điện thoại cũ.",
            "crashed.",
          ),
          tf(
            "The app was submitted to the app store before the launch.",
            true,
            "Đoạn 3: gửi lên app store trước ra mắt.",
            "before the launch.",
          ),
          tf(
            "The app was downloaded fewer than 1,000 times.",
            false,
            "Đoạn 3: hơn **5,000** lượt.",
            "more than 5,000.",
          ),
          mc(
            "What is the project?",
            [
              "A food-ordering app",
              "A bank website",
              "A game",
              "A school portal",
            ],
            0,
            "Đoạn 1: ứng dụng đặt đồ ăn.",
            "food-ordering.",
          ),
          mc(
            "Why did Nam choose a cross-platform framework?",
            [
              "It saved time and money",
              "It was free of bugs",
              "The restaurant required Java",
              "It was faster than native",
            ],
            0,
            "Đoạn 2: tiết kiệm thời gian và tiền.",
            "saved time and money.",
          ),
          mc(
            "What did the emulator help him do?",
            [
              "Check different screen sizes",
              "Write the database",
              "Send notifications",
              "Pay online",
            ],
            0,
            "Đoạn 3: kiểm tra nhiều kích thước màn hình.",
            "screen sizes.",
          ),
          mc(
            "What happened on older phones?",
            [
              "The app crashed",
              "The app was deleted",
              "Orders were free",
              "Nothing",
            ],
            0,
            "Đoạn 3: app bị crash.",
            "crashed.",
          ),
          mc(
            "What did the restaurant announce by push notification?",
            ["A free-delivery week", "A new menu", "A closing date", "A job"],
            0,
            "Đoạn 3: tuần miễn phí giao hàng.",
            "free-delivery week.",
          ),
          mc(
            "Where are menus and orders stored?",
            [
              "In a database",
              "On paper",
              "In the browser only",
              "On the phone only",
            ],
            0,
            "Đoạn 2: back-end lưu trong database.",
            "database.",
          ),
          mc(
            "What did Nam do after the crash?",
            [
              "Fixed it and tested again",
              "Cancelled the project",
              "Ignored it",
              "Removed the app",
            ],
            0,
            "Đoạn 3: sửa và test lại.",
            "tested again.",
          ),
          mc(
            "What came right after wireframes?",
            [
              "Choosing a framework",
              "The launch",
              "The push notification",
              "The download count",
            ],
            0,
            "Đoạn 2: sau wireframe là chọn framework.",
            "Then...",
          ),
          mc(
            "What did customers want?",
            [
              "Something simple",
              "A complex game",
              "A 3D map",
              "Only a website",
            ],
            0,
            "Đoạn 1: đơn giản.",
            "simple.",
          ),
          mc(
            'The word "approval" is closest to:',
            ["permission to publish", "a bug report", "a download", "a design"],
            0,
            "approval = sự chấp thuận.",
            "approve = chấp thuận.",
          ),
          mc(
            "How long did it take to reach 5,000 downloads?",
            ["Within a month", "One year", "One day", "Five years"],
            0,
            "Đoạn 3: trong vòng một tháng.",
            "Within a month.",
          ),
          mc(
            "The restaurant is ___.",
            ["local", "global", "online only", "a school"],
            0,
            "Đoạn 1: local restaurant.",
            "local = địa phương.",
          ),
        ],
      },
    ],
  },
};
/*------------------------------------------------------------------------------------------------------------------*/
U[4] = {
  name: "Game Development",
  vi: "Phát triển Game",
  icon: "🎮",
  sec: {
    vocab: [
      {
        t: "Bài 1 · Chọn từ đúng",
        ins: "Choose the best word to complete each sentence.",
        insvi: "Chọn thuật ngữ phát triển game phù hợp nhất.",
        items: [
          mc(
            "The ___ decides how fast the game runs and how it draws graphics.",
            ["game engine", "storyline", "soundtrack"],
            0,
            "**game engine** = công cụ phát triển game (Unity, Unreal).",
            "engine = động cơ.",
          ),
          mc(
            "The way a game plays and feels is called its ___.",
            ["gameplay", "texture", "server"],
            0,
            "**gameplay** = lối chơi.",
            "game + play.",
          ),
          mc(
            "A powerful enemy at the end of a level is a ___.",
            ["boss", "sprite", "patch"],
            0,
            "**boss** = trùm cuối màn.",
            "boss = sếp.",
          ),
          mc(
            "You must complete this ___ to earn gold.",
            ["quest", "shader", "port"],
            0,
            "**quest** = nhiệm vụ.",
            "quest = cuộc tìm kiếm.",
          ),
          mc(
            "The ___ shows how much life the player has left.",
            ["health bar", "leaderboard", "inventory"],
            0,
            "**health bar** = thanh máu.",
            "health = sức khỏe.",
          ),
          mc(
            "Players compare their scores on the ___.",
            ["leaderboard", "checkpoint", "hitbox"],
            0,
            "**leaderboard** = bảng xếp hạng.",
            "leader + board.",
          ),
          mc(
            "If you die, you return to the last ___.",
            ["checkpoint", "texture", "mod"],
            0,
            "**checkpoint** = điểm lưu tiến trình.",
            "check + point.",
          ),
          mc(
            "A 2D image used for a character is a ___.",
            ["sprite", "server", "ping"],
            0,
            "**sprite** = hình ảnh 2D.",
            "sprite = yêu tinh nhỏ.",
          ),
          mc(
            "The game has high ___ because many players are in the same server.",
            ["lag", "score", "level"],
            0,
            "**lag** = độ trễ gây giật.",
            "lag = chậm trễ.",
          ),
          mc(
            "Play with friends on the same team is called ___ play.",
            ["co-op", "solo", "offline"],
            0,
            "**co-op** = chơi hợp tác.",
            "co-operate.",
          ),
          mc(
            "A small fix released after launch is a ___.",
            ["patch", "texture", "quest"],
            0,
            "**patch** = bản vá.",
            "patch = miếng vá.",
          ),
          mc(
            "Players test an unfinished game in the ___ test.",
            ["beta", "final", "gold"],
            0,
            "**beta test** = thử nghiệm bản beta.",
            "beta = bản thử.",
          ),
        ],
      },
      match(
        "Bài 2 · Nối thuật ngữ với định nghĩa",
        "Match each term with its definition.",
        [
          ["respawn", "to return to life after dying"],
          ["NPC", "a character controlled by the computer"],
          ["power-up", "an item that gives extra abilities"],
          ["hitbox", "the area that detects a hit"],
          ["frame rate", "how many images are shown per second"],
          [
            "indie developer",
            "a person or small team making games independently",
          ],
          ["open world", "a large map you can explore freely"],
          ["microtransaction", "a small in-game purchase"],
        ],
      ),
    ],
    lang: [
      {
        t: "Bài 1 · Chọn dạng đúng",
        ins: "Choose the correct answer.",
        insvi: "Ngữ pháp: thì và so sánh trong ngữ cảnh game.",
        items: [
          mc(
            "The game ___ in 2019.",
            ["was released", "is released", "releases"],
            0,
            "Mốc 2019 → bị động quá khứ **was released**.",
            "was + V3.",
          ),
          mc(
            "The designer ___ on the new level since morning.",
            ["has been working", "works", "worked"],
            0,
            "since morning → **has been working**.",
            "since + mốc.",
          ),
          mc(
            "When the boss appeared, the player ___ a potion.",
            ["was drinking", "drinks", "has drunk"],
            0,
            "Hành động đang diễn ra khi bị cắt ngang → **was drinking**.",
            "QK tiếp diễn.",
          ),
          mc(
            "If you collect 100 coins, you ___ a new skin.",
            ["will unlock", "would unlock", "unlocked"],
            0,
            "Điều kiện loại 1 → **will unlock**.",
            "If + hiện tại, will.",
          ),
          mc(
            "This level is ___ than the last one.",
            ["harder", "more hard", "hardest"],
            0,
            "hard → **harder**.",
            "Tính từ ngắn + er.",
          ),
          mc(
            "It is the ___ game I have ever played.",
            ["most exciting", "more exciting", "excitinger"],
            0,
            "Adj dài → **most exciting**.",
            "most + adj dài.",
          ),
          mc(
            "The characters ___ by artists before they are animated.",
            ["are designed", "design", "are designing"],
            0,
            "Bị động hiện tại → **are designed**.",
            "are + V3.",
          ),
          mc(
            "Players ___ finish the tutorial before they start.",
            ["must", "can to", "may to"],
            0,
            "**must** = bắt buộc.",
            "must + V.",
          ),
        ],
      },
      {
        t: "Bài 2 · Điền dạng đúng",
        ins: "Complete each sentence with the correct form of the word in brackets.",
        insvi: "Gõ dạng đúng.",
        items: [
          fl(
            "The player ___ (lose) all health and the game ended.",
            [["lost"]],
            "Quá khứ đơn → **lost**.",
            "lose → lost.",
          ),
          fl(
            "The patch ___ (download) now.",
            [["is being downloaded"]],
            "Đang diễn ra, bị động → **is being downloaded**.",
            "is being + V3.",
          ),
          fl(
            "This map is ___ (big) than the first one.",
            [["bigger"]],
            "big → **bigger**.",
            "Gấp đôi phụ âm.",
          ),
          fl(
            "If the server ___ (crash), everyone will be disconnected.",
            [["crashes"]],
            "Loại 1 → **crashes**.",
            "If + hiện tại.",
          ),
        ],
      },
    ],
    read: [
      {
        t: "Bài 1 · Making an indie game",
        ins: "Read the text and answer the questions.",
        ctx: `Lan and two friends are making an indie puzzle game called Lantern Quest. They use the Unity game engine because it is free for small teams and has many tutorials. Lan writes the scripts, one friend draws the sprites, and the other composes the soundtrack.

The team started with a simple prototype that had only one level. Then they invited friends to do playtesting. Many testers said the first puzzle was too difficult, so the team lowered the difficulty and added a short tutorial. After several months, they released a beta version and fixed bugs reported by players.

The game is sold on a digital store. The team does not use microtransactions; instead, they plan to sell extra levels as downloadable content.`,
        items: [
          tf(
            "Lantern Quest is an action shooter.",
            false,
            "Đoạn 1: là game **giải đố** (puzzle).",
            "puzzle game.",
          ),
          tf(
            "The team uses the Unity engine.",
            true,
            "Đoạn 1: Unity.",
            "Unity.",
          ),
          tf(
            "The first prototype had many levels.",
            false,
            "Đoạn 2: chỉ **một màn**.",
            "only one level.",
          ),
          tf(
            "The team plans to sell extra levels.",
            true,
            "Đoạn 3: bán thêm màn như DLC.",
            "downloadable content.",
          ),
          mc(
            "Why did they lower the difficulty?",
            [
              "Testers found the first puzzle too hard",
              "The engine was slow",
              "They ran out of money",
              "The store asked",
            ],
            0,
            "Đoạn 2: người thử nói quá khó.",
            "too difficult.",
          ),
          mc(
            "Who draws the sprites?",
            ["One friend", "Lan", "A stranger", "The engine"],
            0,
            "Đoạn 1: một người bạn vẽ sprite.",
            "draws = vẽ.",
          ),
          mc(
            "What did they add after testing?",
            [
              "A short tutorial",
              "Microtransactions",
              "A leaderboard",
              "A boss",
            ],
            0,
            "Đoạn 2: thêm hướng dẫn ngắn.",
            "tutorial.",
          ),
          mc(
            "Why did they choose Unity?",
            [
              "It is free for small teams",
              "It is the oldest",
              "It has no scripts",
              "It needs no computer",
            ],
            0,
            "Đoạn 1: miễn phí cho nhóm nhỏ.",
            "free for small teams.",
          ),
          mc(
            "Where is the game sold?",
            ["On a digital store", "In shops only", "At school", "On TV"],
            0,
            "Đoạn 3: cửa hàng số.",
            "digital store.",
          ),
        ],
      },
    ],
  },
};
U[6] = {
  name: "Blockchain & Web3",
  vi: "Công nghệ Blockchain",
  icon: "⛓️",
  sec: {
    vocab: [
      {
        t: "Bài 1 · Chọn từ đúng",
        ins: "Choose the best word to complete each sentence.",
        insvi: "Chọn thuật ngữ blockchain phù hợp nhất.",
        items: [
          mc(
            "A blockchain is a shared digital ___ that records transactions.",
            ["ledger", "sprite", "template"],
            0,
            "**ledger** = sổ cái.",
            "ledger = sổ cái kế toán.",
          ),
          mc(
            "Because no single company controls it, the network is ___.",
            ["decentralized", "centralized", "private"],
            0,
            "**decentralized** = phi tập trung.",
            "de + central.",
          ),
          mc(
            "You need a ___ key to sign a transaction. Keep it secret.",
            ["private", "public", "spare"],
            0,
            "**private key** = khóa riêng.",
            "private = riêng tư.",
          ),
          mc(
            "Your ___ stores your cryptocurrency and keys.",
            ["wallet", "block", "node"],
            0,
            "**wallet** = ví tiền mã hóa.",
            "wallet = ví.",
          ),
          mc(
            "A program that runs automatically on the blockchain is a ___ contract.",
            ["smart", "paper", "legal"],
            0,
            "**smart contract** = hợp đồng thông minh.",
            "smart = thông minh.",
          ),
          mc(
            "Data on a blockchain is ___: it cannot be changed after it is recorded.",
            ["immutable", "volatile", "temporary"],
            0,
            "**immutable** = bất biến.",
            "im + mutable.",
          ),
        ],
      },
      match(
        "Bài 2 · Nối thuật ngữ với định nghĩa",
        "Match each term with its definition.",
        [
          ["miner", "a person who validates transactions and creates blocks"],
          ["NFT", "a unique digital asset"],
          ["gas fee", "the cost of running a transaction"],
          ["phishing", "a trick to steal your login or seed phrase"],
        ],
      ),
    ],
    lang: [
      {
        t: "Bài 1 · Chọn dạng đúng",
        ins: "Choose the correct answer.",
        insvi: "Ngữ pháp: bị động và điều kiện.",
        items: [
          mc(
            "Every transaction ___ by many nodes.",
            ["is checked", "checks", "is checking"],
            0,
            "Bị động hiện tại → **is checked**.",
            "is + V3.",
          ),
          mc(
            "If you lose your seed phrase, you ___ your wallet.",
            ["may lose", "may losing", "lost"],
            0,
            "**may lose** (có thể mất).",
            "may + V.",
          ),
          mc(
            "The first block ___ in 2009.",
            ["was created", "is created", "creates"],
            0,
            "Mốc 2009 → **was created**.",
            "was + V3.",
          ),
          mc(
            "Blockchain ___ more transparent than a traditional database.",
            ["is", "be", "are"],
            0,
            "Chủ ngữ số ít → **is**.",
            "Blockchain is...",
          ),
        ],
      },
      {
        t: "Bài 2 · Điền dạng đúng",
        ins: "Complete each sentence with the correct form of the word in brackets.",
        insvi: "Gõ dạng đúng.",
        items: [
          fl(
            "The transaction ___ (confirm) in ten minutes.",
            [["will be confirmed"]],
            "Tương lai bị động → **will be confirmed**.",
            "will be + V3.",
          ),
          fl(
            "Bitcoin is ___ (volatile) than a stablecoin.",
            [["more volatile"]],
            "Adj dài → **more volatile**.",
            "more + adj.",
          ),
        ],
      },
    ],
    read: [
      {
        t: "Bài 1 · Blockchain in the supply chain",
        ins: "Read the text and answer the questions.",
        ctx: `A coffee company wants customers to know where their beans come from. It records every step of the supply chain on a blockchain: the farm, the export date, the shipping route, and the roasting date.

Because the data is immutable and transparent, nobody can secretly change it. Customers scan a code on the package and see the full history. If a problem happens, the company can trace the cause quickly. The system uses a smart contract to pay farmers automatically when the coffee is delivered.`,
        items: [
          tf(
            "The company records only the roasting date.",
            false,
            "Đoạn 1: ghi **mọi bước**.",
            "every step.",
          ),
          tf(
            "Customers can scan a code to see the history.",
            true,
            "Đoạn 2: quét mã để xem lịch sử.",
            "scan a code.",
          ),
          tf(
            "Data on the blockchain can be secretly changed.",
            false,
            "Đoạn 2: bất biến và minh bạch.",
            "immutable.",
          ),
          mc(
            "What pays the farmers automatically?",
            ["A smart contract", "A bank clerk", "The customer", "A miner"],
            0,
            "Đoạn 2: smart contract.",
            "smart contract.",
          ),
          mc(
            "Why is blockchain useful here?",
            [
              "It makes the history reliable and traceable",
              "It makes coffee cheaper",
              "It roasts the beans",
              "It replaces farms",
            ],
            0,
            "Đoạn 2: minh bạch và truy vết.",
            "trace.",
          ),
          mc(
            'The word "trace" is closest to:',
            ["follow back to the source", "hide", "copy", "delete"],
            0,
            "trace = truy ngược nguồn gốc.",
            "trace = dấu vết.",
          ),
        ],
      },
    ],
  },
};

U[5] = {
  name: "Artificial Intelligence & Data Science",
  vi: "Trí tuệ nhân tạo & Khoa học dữ liệu",
  icon: "🤖",
  sec: {
    vocab: [
      {
        t: "Bài 1 · Chọn từ đúng",
        ins: "Choose the best word to complete each sentence.",
        insvi: "Chọn thuật ngữ AI/dữ liệu phù hợp nhất.",
        items: [
          mc(
            "A model learns patterns from ___ data.",
            ["training", "random", "empty"],
            0,
            "**training data** = dữ liệu huấn luyện.",
            "train = huấn luyện.",
          ),
          mc(
            "Predicting a category, such as spam or not spam, is ___.",
            ["classification", "clustering", "visualization"],
            0,
            "**classification** = phân loại.",
            "class = lớp.",
          ),
          mc(
            "Predicting a number, such as a house price, is ___.",
            ["regression", "classification", "labelling"],
            0,
            "**regression** = hồi quy.",
            "số liên tục.",
          ),
          mc(
            "Grouping similar items without labels is ___.",
            ["clustering", "regression", "overfitting"],
            0,
            "**clustering** = phân cụm.",
            "cluster = cụm.",
          ),
          mc(
            "A model that memorizes the training data but fails on new data suffers from ___.",
            ["overfitting", "underfitting", "normalization"],
            0,
            "**overfitting** = quá khớp.",
            "over = quá.",
          ),
          mc(
            "Removing errors and duplicates from data is data ___.",
            ["cleaning", "mining", "training"],
            0,
            "**data cleaning** = làm sạch dữ liệu.",
            "clean = sạch.",
          ),
          mc(
            "A value far from the others is an ___.",
            ["outlier", "average", "label"],
            0,
            "**outlier** = giá trị ngoại lai.",
            "out + lie.",
          ),
          mc(
            "The proportion of correct predictions is called ___.",
            ["accuracy", "bias", "latency"],
            0,
            "**accuracy** = độ chính xác.",
            "accurate = chính xác.",
          ),
          mc(
            "A ___ shows data as a graph so patterns are easy to see.",
            ["chart", "prompt", "pipeline"],
            0,
            "**chart** = biểu đồ.",
            "chart = biểu đồ.",
          ),
          mc(
            "An AI that writes text or images is called ___ AI.",
            ["generative", "static", "manual"],
            0,
            "**generative AI** = AI tạo sinh.",
            "generate = tạo ra.",
          ),
          mc(
            "When an AI invents false facts, this is called a ___.",
            ["hallucination", "prediction", "benchmark"],
            0,
            "**hallucination** = ảo giác (bịa thông tin).",
            "hallucinate.",
          ),
          mc(
            "The text you type to instruct an AI is a ___.",
            ["prompt", "dataset", "epoch"],
            0,
            "**prompt** = câu lệnh gợi ý.",
            "prompt = nhắc.",
          ),
          mc(
            "Using a trained model to make predictions is called ___.",
            ["inference", "training", "cleaning"],
            0,
            "**inference** = suy luận.",
            "infer = suy ra.",
          ),
          mc(
            "A bank uses an algorithm to detect unusual payments. This is ___ detection.",
            ["anomaly", "image", "speech"],
            0,
            "**anomaly detection** = phát hiện bất thường.",
            "anomaly = điều bất thường.",
          ),
          mc(
            "The ___ of a dataset is the sum divided by the number of values.",
            ["average", "median", "label"],
            0,
            "**average** = trung bình.",
            "average = trung bình.",
          ),
          mc(
            "A computer that can see and understand images uses ___ vision.",
            ["computer", "human", "manual"],
            0,
            "**computer vision** = thị giác máy tính.",
            "vision = thị giác.",
          ),
          mc(
            "Making sure AI treats all groups equally relates to ___.",
            ["fairness", "speed", "storage"],
            0,
            "**fairness** = sự công bằng.",
            "fair = công bằng.",
          ),
          mc(
            "A chatbot uses natural language ___ to understand you.",
            ["processing", "printing", "cooking"],
            0,
            "**natural language processing** = xử lý ngôn ngữ tự nhiên.",
            "NLP.",
          ),
        ],
      },
      match(
        "Bài 2 · Nối thuật ngữ với định nghĩa",
        "Match each term with its definition.",
        [
          ["dataset", "a collection of data"],
          ["feature", "an input variable used by a model"],
          ["label", "the correct answer attached to an example"],
          ["neural network", "a model inspired by the brain"],
          ["epoch", "one full pass through the training data"],
          ["bias", "an unfair tendency in results"],
          ["sample", "a small part of a population"],
          ["median", "the middle value"],
          ["dashboard", "a screen showing key figures"],
          ["pipeline", "a series of data-processing steps"],
        ],
      ),
    ],
    lang: [
      {
        t: "Bài 1 · Chọn dạng đúng",
        ins: "Choose the correct answer.",
        insvi: "Ngữ pháp: bị động, so sánh, điều kiện trong văn bản AI.",
        items: [
          mc(
            "The model ___ on a large dataset.",
            ["was trained", "trained", "is training"],
            0,
            "Bị động quá khứ → **was trained**.",
            "was + V3.",
          ),
          mc(
            "If the data is poor, the results ___ unreliable.",
            ["will be", "would have been", "are being"],
            0,
            "Loại 1 → **will be**.",
            "If + hiện tại, will.",
          ),
          mc(
            "If we had more data, the model ___ better.",
            ["would perform", "will perform", "performed"],
            0,
            "Loại 2 → **would perform**.",
            "If + QK, would.",
          ),
          mc(
            "This algorithm is ___ than the previous one.",
            ["more accurate", "accuratest", "most accurate"],
            0,
            "Adj dài → **more accurate**.",
            "more + adj.",
          ),
          mc(
            "It is the ___ model we have tested.",
            ["most powerful", "more powerful", "powerfuller"],
            0,
            "Superlative → **most powerful**.",
            "most + adj.",
          ),
          mc(
            "Data scientists ___ data for several weeks before building a model.",
            ["have been cleaning", "clean yesterday", "are clean"],
            0,
            "**have been cleaning** (kéo dài).",
            "for + khoảng thời gian.",
          ),
          mc(
            "The results ___ in a report by the team last month.",
            ["were presented", "presented", "are presenting"],
            0,
            "last month → **were presented**.",
            "were + V3.",
          ),
          mc(
            "The system ___ millions of images every day.",
            ["processes", "process", "is processed"],
            0,
            "Thói quen → **processes**.",
            "Chủ ngữ số ít.",
          ),
          mc(
            "The model ___ already when the error appeared.",
            ["had been tested", "has tested", "was testing"],
            0,
            "Trước mốc quá khứ → **had been tested**.",
            "had been + V3.",
          ),
          mc(
            "Neither the data nor the model ___ perfect.",
            ["is", "are", "were being"],
            0,
            "Neither… nor + động từ theo chủ ngữ gần → **is**.",
            "model số ít.",
          ),
          mc(
            "The more data you collect, the ___ the model becomes.",
            ["better", "best", "good"],
            0,
            "The more…, the **better**.",
            "So sánh kép.",
          ),
          mc(
            "Users should know ___ their data is used.",
            ["how", "what for how", "that how"],
            0,
            "**how** + mệnh đề.",
            "know how...",
          ),
          mc(
            "AI should be used ___ people’s privacy.",
            ["to protect", "protect", "protecting to"],
            0,
            "**to protect** (mục đích).",
            "to + V.",
          ),
          mc(
            "The model made predictions ___ accurately than last year.",
            ["more", "most", "much"],
            0,
            "**more accurately**.",
            "more + adv.",
          ),
        ],
      },
      {
        t: "Bài 2 · Điền dạng đúng",
        ins: "Complete each sentence with the correct form of the word in brackets.",
        insvi: "Gõ dạng đúng.",
        items: [
          fl(
            "The data ___ (collect) from 10,000 users.",
            [["was collected"]],
            "Bị động → **was collected**.",
            "was + V3.",
          ),
          fl(
            "The model ___ (improve) since we added new features.",
            [["has improved", "has been improving"]],
            "since → **has improved**.",
            "since.",
          ),
          fl(
            "If the model overfits, it ___ (fail) on new data.",
            [["will fail"]],
            "Loại 1 → **will fail**.",
            "If + hiện tại.",
          ),
          fl(
            "This chart is ___ (clear) than the table.",
            [["clearer", "more clear"]],
            "**clearer**.",
            "clear → clearer.",
          ),
          fl(
            "The project ___ (finish) by June.",
            [["will have been finished", "will be finished"]],
            "Hạn tương lai bị động.",
            "by + mốc.",
          ),
          fl(
            "Many errors ___ (find) in the data last week.",
            [["were found"]],
            "**were found**.",
            "were + V3.",
          ),
          fl(
            "If I ___ (be) you, I would clean the data first.",
            [["were", "was"]],
            "Loại 2 → **were**.",
            "If I were you.",
          ),
          fl(
            "The AI ___ (learn) while it was reading millions of pages.",
            [["was learning"]],
            "Quá khứ tiếp diễn → **was learning**.",
            "while + tiếp diễn.",
          ),
        ],
      },
    ],
    read: [
      {
        t: "Bài 1 · AI in a hospital",
        ins: "Read the text and answer the questions.",
        ctx: `A hospital has started using machine learning to read X-ray images. The model was trained on more than 100,000 images, each labelled by expert doctors. It can detect signs of pneumonia in seconds, which helps doctors treat patients faster.

However, the team is careful. They found that the model was less accurate for patients from groups that were not well represented in the training data. This is a problem of bias, so the team is collecting more varied data. In addition, doctors always make the final decision; the AI only gives a suggestion.

The hospital also protects privacy by removing names from all images before they are used. Data scientists say that clean, fair, and well-labelled data is as important as the algorithm itself.`,
        items: [
          tf(
            "The model was trained on fewer than 1,000 images.",
            false,
            "Đoạn 1: hơn **100,000** ảnh.",
            "more than 100,000.",
          ),
          tf(
            "The model can detect signs of pneumonia in seconds.",
            true,
            "Đoạn 1: trong vài giây.",
            "in seconds.",
          ),
          tf(
            "The model works equally well for all groups.",
            false,
            "Đoạn 2: kém chính xác hơn với nhóm ít đại diện.",
            "less accurate.",
          ),
          tf(
            "Doctors make the final decision.",
            true,
            "Đoạn 2: bác sĩ quyết định cuối.",
            "final decision.",
          ),
          tf(
            "Names are kept on the images to help the AI.",
            false,
            "Đoạn 3: tên bị **xóa** để bảo vệ riêng tư.",
            "removing names.",
          ),
          tf(
            "Data quality matters as much as the algorithm.",
            true,
            "Đoạn 3: dữ liệu sạch, công bằng quan trọng ngang thuật toán.",
            "as important as.",
          ),
          mc(
            "What does the hospital use machine learning for?",
            [
              "Reading X-ray images",
              "Booking tables",
              "Paying staff",
              "Cleaning rooms",
            ],
            0,
            "Đoạn 1: đọc ảnh X-quang.",
            "X-ray.",
          ),
          mc(
            "Who labelled the training images?",
            ["Expert doctors", "Patients", "The AI", "Students"],
            0,
            "Đoạn 1: bác sĩ chuyên gia.",
            "expert doctors.",
          ),
          mc(
            "What problem did the team find?",
            [
              "Bias against some groups",
              "A slow screen",
              "Too much data",
              "No doctors",
            ],
            0,
            "Đoạn 2: thiên lệch (bias).",
            "bias.",
          ),
          mc(
            "How is the team fixing it?",
            [
              "Collecting more varied data",
              "Deleting the model",
              "Buying new X-ray machines",
              "Ignoring the groups",
            ],
            0,
            "Đoạn 2: thu thập dữ liệu đa dạng hơn.",
            "varied data.",
          ),
          mc(
            "What does the AI give doctors?",
            ["A suggestion", "The final decision", "A bill", "Nothing"],
            0,
            "Đoạn 2: chỉ đưa gợi ý.",
            "suggestion.",
          ),
          mc(
            "How does the hospital protect privacy?",
            [
              "It removes names from images",
              "It stops using AI",
              "It sells the data",
              "It prints images",
            ],
            0,
            "Đoạn 3: xóa tên.",
            "removing names.",
          ),
          mc(
            'The word "represented" means:',
            ["included", "hidden", "repaired", "priced"],
            0,
            "represented = có mặt, được đại diện.",
            "represent = đại diện.",
          ),
          mc(
            'Why is the team "careful"?',
            [
              "AI can be biased",
              "The images are too large",
              "The doctors are slow",
              "Machines cannot see",
            ],
            0,
            "Cẩn trọng vì có thiên lệch.",
            "careful = cẩn thận.",
          ),
          mc(
            "What is the main idea?",
            [
              "AI helps, but data quality, fairness and human decisions matter",
              "AI replaces doctors",
              "X-rays are old",
              "Privacy is unimportant",
            ],
            0,
            "Ý chính: AI hữu ích nhưng cần dữ liệu tốt, công bằng và con người quyết định.",
            "Main idea.",
          ),
          mc(
            "Which phrase shows contrast in paragraph 2?",
            ["However", "Because", "In addition", "Also"],
            0,
            "**However** = tuy nhiên (đối lập).",
            "however = tuy nhiên.",
          ),
        ],
      },
    ],
  },
};
U[3] = {
  name: "Database & Cloud Computing",
  vi: "Cơ sở dữ liệu & Điện toán đám mây",
  icon: "☁️",
  sec: {
    vocab: [
      {
        t: "Bài 1 · Chọn từ đúng",
        ins: "Choose the best word to complete each sentence.",
        insvi: "Chọn thuật ngữ CSDL/đám mây phù hợp nhất.",
        items: [
          mc(
            "A ___ key uniquely identifies each row in a table.",
            ["primary", "foreign", "spare"],
            0,
            "**primary key** = khóa chính.",
            "primary = chính.",
          ),
          mc(
            "We use ___ to ask the database for information.",
            ["SQL", "HTML", "CSS"],
            0,
            "**SQL** truy vấn cơ sở dữ liệu.",
            "Structured Query Language.",
          ),
          mc(
            "Regular copies of data in case of loss are called ___.",
            ["backups", "indexes", "views"],
            0,
            "**backup** = sao lưu.",
            "back up.",
          ),
          mc(
            "Making a database faster to search by adding an ___.",
            ["index", "alert", "region"],
            0,
            "**index** = chỉ mục.",
            "như mục lục sách.",
          ),
          mc(
            "Renting software over the internet is ___.",
            ["SaaS", "IaaS", "PaaS"],
            0,
            "**SaaS** = phần mềm như dịch vụ.",
            "Software as a Service.",
          ),
          mc(
            "Renting servers, storage and networks is ___.",
            ["IaaS", "SaaS", "HTML"],
            0,
            "**IaaS** = hạ tầng như dịch vụ.",
            "Infrastructure.",
          ),
          mc(
            "The cloud can add more servers automatically during busy times. This is ___.",
            ["auto scaling", "downtime", "migration"],
            0,
            "**auto scaling** = tự động mở rộng.",
            "scale.",
          ),
          mc(
            "A ___ spreads incoming traffic across several servers.",
            ["load balancer", "firewall", "snapshot"],
            0,
            "**load balancer** = bộ cân bằng tải.",
            "balance = cân bằng.",
          ),
          mc(
            "A copy of a system at one moment in time is a ___.",
            ["snapshot", "region", "query"],
            0,
            "**snapshot** = bản chụp trạng thái.",
            "snap = chụp.",
          ),
          mc(
            "If a data center fails, ___ recovery restores the service.",
            ["disaster", "daily", "random"],
            0,
            "**disaster recovery** = khôi phục sau thảm họa.",
            "disaster = thảm họa.",
          ),
        ],
      },
      match(
        "Bài 2 · Nối thuật ngữ với định nghĩa",
        "Match each term with its definition.",
        [
          [
            "public cloud",
            "services shared by many customers over the internet",
          ],
          ["private cloud", "a cloud used by only one organization"],
          ["uptime", "the time a system is working"],
          ["downtime", "the time a system is not working"],
          ["replication", "copying data to another server"],
          ["data warehouse", "a large store for analyzing business data"],
          ["encryption", "turning data into a secret code"],
          ["pay-as-you-go", "paying only for what you use"],
        ],
      ),
    ],
    lang: [
      {
        t: "Bài 1 · Chọn dạng đúng",
        ins: "Choose the correct answer.",
        insvi: "Ngữ pháp: bị động, điều kiện, so sánh.",
        items: [
          mc(
            "Customer data ___ in a secure database.",
            ["is stored", "stores", "is storing"],
            0,
            "Bị động hiện tại → **is stored**.",
            "is + V3.",
          ),
          mc(
            "If the server fails, traffic ___ to another server.",
            ["will be redirected", "redirects", "would redirect"],
            0,
            "Loại 1 bị động.",
            "will be + V3.",
          ),
          mc(
            "If we moved to the cloud, we ___ money on hardware.",
            ["would save", "will save", "saved"],
            0,
            "Loại 2 → **would save**.",
            "If + QK, would.",
          ),
          mc(
            "The data ___ to the cloud last night.",
            ["was migrated", "migrates", "is migrating"],
            0,
            "last night → **was migrated**.",
            "was + V3.",
          ),
          mc(
            "Cloud storage is ___ than local storage for sharing files.",
            ["more convenient", "convenienter", "most convenient"],
            0,
            "**more convenient**.",
            "more + adj.",
          ),
          mc(
            "We ___ this provider for three years.",
            ["have used", "use for", "are using"],
            0,
            "for three years → **have used**.",
            "for + khoảng thời gian.",
          ),
          mc(
            "The database ___ at the moment, so please wait.",
            ["is being updated", "updates", "has updated"],
            0,
            "**is being updated**.",
            "đang diễn ra.",
          ),
          mc(
            "Backups ___ every night by an automatic script.",
            ["are made", "make", "are making"],
            0,
            "**are made**.",
            "are + V3.",
          ),
        ],
      },
      {
        t: "Bài 2 · Điền dạng đúng",
        ins: "Complete each sentence with the correct form of the word in brackets.",
        insvi: "Gõ dạng đúng.",
        items: [
          fl(
            "The files ___ (upload) to the cloud yesterday.",
            [["were uploaded"]],
            "**were uploaded**.",
            "were + V3.",
          ),
          fl(
            "If the backup ___ (fail), we will lose data.",
            [["fails"]],
            "If + hiện tại → **fails**.",
            "Loại 1.",
          ),
          fl(
            "This service is ___ (cheap) than the old one.",
            [["cheaper"]],
            "cheap → **cheaper**.",
            "Adj ngắn + er.",
          ),
          fl(
            "We ___ (migrate) the system by next month.",
            [["will have migrated", "will migrate"]],
            "by next month.",
            "Hạn tương lai.",
          ),
        ],
      },
    ],
    read: [
      {
        t: "Bài 1 · Moving to the cloud",
        ins: "Read the text and answer the questions.",
        ctx: `A small online shop used to run its website on a single server in the office. When a big sale started, the server became slow and sometimes crashed. Customers could not place orders, and the shop lost money.

The owner decided to move to the cloud. The website now runs on virtual machines with a load balancer, and auto scaling adds more machines when traffic is high. The product data is stored in a relational database with daily backups, and the shop pays only for what it uses.

After the migration, downtime fell almost to zero. The owner also learned an important lesson: security still matters in the cloud, so the team uses encryption and strict access control.`,
        items: [
          tf(
            "The shop used a server in its office before.",
            true,
            "Đoạn 1: một server trong văn phòng.",
            "single server.",
          ),
          tf(
            "The old server handled big sales easily.",
            false,
            "Đoạn 1: chậm và đôi khi crash.",
            "slow and crashed.",
          ),
          tf(
            "Auto scaling adds more machines when traffic is high.",
            true,
            "Đoạn 2.",
            "auto scaling.",
          ),
          mc(
            "What does the shop pay for now?",
            [
              "Only what it uses",
              "A fixed fee for everything",
              "Nothing",
              "Only hardware",
            ],
            0,
            "Đoạn 2: trả theo mức dùng.",
            "pay-as-you-go.",
          ),
          mc(
            "What happened to downtime?",
            [
              "It fell almost to zero",
              "It doubled",
              "It stayed the same",
              "It is unknown",
            ],
            0,
            "Đoạn 3: gần như về 0.",
            "almost to zero.",
          ),
          mc(
            "What did the owner learn?",
            [
              "Security still matters in the cloud",
              "Cloud needs no passwords",
              "Backups are useless",
              "Servers are unnecessary",
            ],
            0,
            "Đoạn 3: vẫn cần bảo mật.",
            "security.",
          ),
          mc(
            "What protects the data?",
            ["Encryption and access control", "Paper copies", "Fans", "Luck"],
            0,
            "Đoạn 3.",
            "encryption.",
          ),
        ],
      },
    ],
  },
};
/*----------------------------------------------------------------------------------------------------------------------*/
U[7] = {
  name: "Cybersecurity & Network",
  vi: "An ninh mạng & Mạng máy tính",
  icon: "🔒",
  sec: {
    vocab: [
      {
        t: "Bài 1 · Chọn từ đúng",
        ins: "Choose the best word to complete each sentence.",
        insvi: "Chọn thuật ngữ an ninh mạng phù hợp nhất.",
        items: [
          mc(
            "A ___ blocks unauthorized traffic between networks.",
            ["firewall", "router", "cable"],
            0,
            "**firewall** = tường lửa.",
            "fire + wall.",
          ),
          mc(
            "An email that tricks you into giving your password is ___.",
            ["phishing", "encryption", "roaming"],
            0,
            "**phishing** = lừa đảo giả mạo.",
            "phish ~ fish = câu cá.",
          ),
          mc(
            "Malware that locks your files and demands money is ___.",
            ["ransomware", "antivirus", "spyware"],
            0,
            "**ransomware** = mã độc tống tiền.",
            "ransom = tiền chuộc.",
          ),
          mc(
            "Turning data into a secret code is called ___.",
            ["encryption", "download", "compression"],
            0,
            "**encryption** = mã hóa.",
            "en + crypt.",
          ),
          mc(
            "A ___ attack floods a server with traffic until it stops working.",
            ["DDoS", "USB", "VPN"],
            0,
            "**DDoS** = từ chối dịch vụ phân tán.",
            "flood = tràn ngập.",
          ),
          mc(
            "A weakness in software that attackers can use is a ___.",
            ["vulnerability", "protocol", "topology"],
            0,
            "**vulnerability** = lỗ hổng.",
            "vulnerable = dễ bị tổn thương.",
          ),
          mc(
            "A ___ forwards data packets between networks.",
            ["router", "keyboard", "monitor"],
            0,
            "**router** = bộ định tuyến, chuyển tiếp gói tin giữa các mạng.",
            "route = tuyến đường.",
          ),
          mc(
            "A ___ creates a private, secure connection over the internet.",
            ["VPN", "LAN", "URL"],
            0,
            "**VPN** = mạng riêng ảo.",
            "Virtual Private Network.",
          ),
          mc(
            "Using your fingerprint to log in is ___ authentication.",
            ["biometric", "manual", "random"],
            0,
            "**biometric** = sinh trắc học.",
            "bio = sự sống.",
          ),
          mc(
            "The network connects computers in one building: it is a ___.",
            ["LAN", "WAN", "VPN"],
            0,
            "**LAN** = mạng cục bộ.",
            "Local Area Network.",
          ),
        ],
      },
      match(
        "Bài 2 · Nối thuật ngữ với định nghĩa",
        "Match each term with its definition.",
        [
          ["malware", "software designed to cause harm"],
          ["botnet", "a group of infected computers controlled by an attacker"],
          [
            "two-factor authentication",
            "login that needs two proofs of identity",
          ],
          ["penetration test", "an authorized attempt to break into a system"],
          ["DNS", "a system that turns names into IP addresses"],
          ["packet", "a small unit of data sent over a network"],
          ["bandwidth", "the amount of data that can be sent per second"],
          ["data breach", "an incident where private data is exposed"],
        ],
      ),
    ],
    lang: [
      {
        t: "Bài 1 · Chọn dạng đúng",
        ins: "Choose the correct answer.",
        insvi: "Ngữ pháp: bị động, lời khuyên, điều kiện.",
        items: [
          mc(
            "Passwords ___ never be shared.",
            ["should", "are", "must to"],
            0,
            "**should** + V = nên.",
            "Lời khuyên.",
          ),
          mc(
            "If you click that link, your computer ___ infected.",
            ["may become", "may became", "became"],
            0,
            "**may become**.",
            "may + V.",
          ),
          mc(
            "The network ___ by hackers last night.",
            ["was attacked", "attacked", "is attacking"],
            0,
            "last night → **was attacked**.",
            "was + V3.",
          ),
          mc(
            "Our systems ___ regularly by a security team.",
            ["are monitored", "monitor", "are monitoring"],
            0,
            "**are monitored**.",
            "are + V3.",
          ),
          mc(
            "If the firewall had been updated, the attack ___.",
            ["would have been stopped", "would stop", "will stop"],
            0,
            "Loại 3 → **would have been stopped**.",
            "If + had V3.",
          ),
          mc(
            "You ___ use a strong password.",
            ["must", "could to", "have"],
            0,
            "**must** = bắt buộc.",
            "must + V.",
          ),
          mc(
            "The data ___ before it was sent.",
            ["had been encrypted", "was encrypting", "has encrypted"],
            0,
            "**had been encrypted** (trước mốc quá khứ).",
            "had been + V3.",
          ),
          mc(
            "Never ___ unknown files from unsafe websites.",
            ["download", "to download", "downloading"],
            0,
            "Mệnh lệnh phủ định: Never + V.",
            "Never + V.",
          ),
        ],
      },
      {
        t: "Bài 2 · Điền dạng đúng",
        ins: "Complete each sentence with the correct form of the word in brackets.",
        insvi: "Gõ dạng đúng.",
        items: [
          fl(
            "The files ___ (encrypt) before they were sent.",
            [["were encrypted", "had been encrypted"]],
            "Bị động quá khứ.",
            "be + V3.",
          ),
          fl(
            "If you use public Wi-Fi, you ___ (be) at risk.",
            [["may be", "will be", "are"]],
            "Điều kiện thực tế.",
            "If + hiện tại.",
          ),
          fl(
            "The patch ___ (install) tonight.",
            [["will be installed"]],
            "Tương lai bị động.",
            "will be + V3.",
          ),
          fl(
            "This password is ___ (strong) than that one.",
            [["stronger"]],
            "strong → **stronger**.",
            "Adj ngắn + er.",
          ),
        ],
      },
    ],
    read: [
      {
        t: "Bài 1 · A phishing attack",
        ins: "Read the text and answer the questions.",
        ctx: `Last month, an employee at a small company received an email that looked like it came from the IT department. It asked him to confirm his password by clicking a link. The link opened a fake login page. Fortunately, he noticed that the web address was slightly different and reported the email instead of clicking.

The IT team quickly warned everyone and blocked the sender. They also reminded staff that real IT teams never ask for passwords by email. As a result, the company now uses two-factor authentication and runs short security training every quarter.`,
        items: [
          tf(
            "The email looked like it came from the IT department.",
            true,
            "Đoạn 1.",
            "looked like.",
          ),
          tf(
            "The employee clicked the link and entered his password.",
            false,
            "Đoạn 1: anh báo cáo mà không bấm.",
            "reported.",
          ),
          tf("The IT team blocked the sender.", true, "Đoạn 2.", "blocked."),
          tf(
            "Real IT teams often ask for passwords by email.",
            false,
            "Đoạn 2: không bao giờ.",
            "never ask.",
          ),
          mc(
            "How did the employee notice the fake page?",
            [
              "The web address was slightly different",
              "The page was blue",
              "The email was long",
              "He used antivirus",
            ],
            0,
            "Đoạn 1.",
            "slightly different.",
          ),
          mc(
            "What did the employee do?",
            [
              "Reported the email",
              "Deleted all files",
              "Called a hacker",
              "Changed his job",
            ],
            0,
            "Đoạn 1.",
            "reported.",
          ),
          mc(
            "What does the company use now?",
            [
              "Two-factor authentication",
              "No passwords",
              "Only paper",
              "Free Wi-Fi",
            ],
            0,
            "Đoạn 2.",
            "two-factor.",
          ),
          mc(
            "How often is security training held?",
            ["Every quarter", "Every day", "Never", "Once in ten years"],
            0,
            "Đoạn 2: mỗi quý.",
            "quarter = quý.",
          ),
          mc(
            'The word "fake" means:',
            ["not real", "very fast", "private", "free"],
            0,
            "fake = giả.",
            "fake = giả mạo.",
          ),
          mc(
            "What is the main idea?",
            [
              "Careful users and good policies prevent attacks",
              "Email is unsafe",
              "IT is useless",
              "Fake pages are rare",
            ],
            0,
            "Ý chính.",
            "main idea.",
          ),
        ],
      },
    ],
  },
};
/*------------------------------------------------------------------------------------------------------*/
U[8] = {
  name: "DevOps & IT Support",
  vi: "Quản trị hệ thống & Hỗ trợ kỹ thuật",
  icon: "⚙️",
  sec: {
    vocab: [
      {
        t: "Bài 1 · Chọn từ đúng",
        ins: "Choose the best word to complete each sentence.",
        insvi: "Chọn thuật ngữ DevOps/IT Support phù hợp nhất.",
        items: [
          mc(
            "Each user problem is recorded as a support ___.",
            ["ticket", "sprint", "branch"],
            0,
            "**ticket** = phiếu yêu cầu hỗ trợ.",
            "ticket = vé.",
          ),
          mc(
            "If you cannot solve the issue, you ___ it to a senior engineer.",
            ["escalate", "install", "compile"],
            0,
            "**escalate** = chuyển lên cấp cao hơn.",
            "escalator = thang cuốn lên.",
          ),
          mc(
            "A temporary solution until the real fix is ready is a ___.",
            ["workaround", "rollback", "deadline"],
            0,
            "**workaround** = giải pháp tạm thời.",
            "work around = lách quanh.",
          ),
          mc(
            "CI/CD stands for continuous integration and continuous ___.",
            ["delivery", "deletion", "defense"],
            0,
            "**delivery** = phân phối liên tục.",
            "CI/CD.",
          ),
          mc(
            "We use a ___ to monitor servers and send alerts.",
            ["monitoring tool", "keyboard", "printer"],
            0,
            "**monitoring tool** = công cụ giám sát.",
            "monitor = theo dõi.",
          ),
          mc(
            "After an incident, the team writes a ___ to learn from it.",
            ["postmortem", "license", "driver"],
            0,
            "**postmortem** = báo cáo sau sự cố.",
            "post-mortem = sau khi chết.",
          ),
          mc(
            "The user forgot the password, so we ___ it.",
            ["reset", "uninstall", "format"],
            0,
            "**reset** = đặt lại.",
            "re + set.",
          ),
          mc(
            "Tools like Docker use ___ to package applications.",
            ["containers", "cables", "drivers"],
            0,
            "**container** = vùng chứa.",
            "container = thùng.",
          ),
          mc(
            "Please ___ the latest driver so the printer works.",
            ["install", "compile", "escalate"],
            0,
            "**install** = cài đặt.",
            "in + stall.",
          ),
          mc(
            "Fixing the same problem again and again means we should find the root ___.",
            ["cause", "user", "file"],
            0,
            "**root cause** = nguyên nhân gốc rễ.",
            "root = gốc.",
          ),
        ],
      },
      match(
        "Bài 2 · Nối thuật ngữ với định nghĩa",
        "Match each term with its definition.",
        [
          ["help desk", "a team that helps users with problems"],
          ["outage", "a period when a service is not available"],
          ["rollback", "returning to the previous version"],
          ["staging environment", "a safe copy of production for testing"],
          ["automation", "using tools instead of manual work"],
          [
            "infrastructure as code",
            "managing servers with configuration files",
          ],
          ["knowledge base", "a collection of help articles"],
          ["firmware", "software built into hardware"],
        ],
      ),
    ],
    lang: [
      {
        t: "Bài 1 · Chọn dạng đúng",
        ins: "Choose the correct answer.",
        insvi: "Ngữ pháp: câu lệnh lịch sự, thì, bị động.",
        items: [
          mc(
            "Could you please ___ your computer and try again?",
            ["restart", "restarting", "to restart"],
            0,
            "Could you + V nguyên mẫu.",
            "Could you + V.",
          ),
          mc(
            "The ticket ___ yesterday and has been solved.",
            ["was opened", "opens", "is opening"],
            0,
            "**was opened**.",
            "was + V3.",
          ),
          mc(
            "The server ___ down since 9 a.m.",
            ["has been", "is", "was being"],
            0,
            "since 9 a.m. → **has been**.",
            "since + mốc.",
          ),
          mc(
            "If the problem continues, I ___ it to the network team.",
            ["will escalate", "would escalate", "escalated"],
            0,
            "Loại 1 → **will escalate**.",
            "If + hiện tại.",
          ),
          mc(
            "You ___ restart the router first. It often fixes the issue.",
            ["should", "must to", "have"],
            0,
            "**should** = nên.",
            "Lời khuyên.",
          ),
          mc(
            "All updates ___ in the staging environment before release.",
            ["are tested", "test", "are testing"],
            0,
            "**are tested**.",
            "are + V3.",
          ),
          mc(
            "I am sorry ___ the delay.",
            ["for", "to", "of"],
            0,
            "sorry **for** + danh từ.",
            "sorry for.",
          ),
          mc(
            "The engineer ___ the issue when the user called.",
            ["was fixing", "fixes", "has fixed"],
            0,
            "Đang làm thì bị cắt ngang → **was fixing**.",
            "QK tiếp diễn.",
          ),
        ],
      },
      {
        t: "Bài 2 · Điền dạng đúng",
        ins: "Complete each sentence with the correct form of the word in brackets.",
        insvi: "Gõ dạng đúng.",
        items: [
          fl(
            "The new version ___ (deploy) tonight.",
            [["will be deployed"]],
            "Tương lai bị động.",
            "will be + V3.",
          ),
          fl(
            "We ___ (fix) the bug yesterday.",
            [["fixed"]],
            "Quá khứ đơn.",
            "fix → fixed.",
          ),
          fl(
            "If the disk ___ (be) full, delete old files.",
            [["is"]],
            "If + hiện tại.",
            "Loại 1.",
          ),
          fl(
            "This process is ___ (fast) than before.",
            [["faster"]],
            "fast → **faster**.",
            "Adj ngắn + er.",
          ),
        ],
      },
    ],
    read: [
      {
        t: "Bài 1 · A day on the help desk",
        ins: "Read the text and answer the questions.",
        ctx: `Mai works on the help desk of a mid-sized company. Every day she receives tickets from staff: forgotten passwords, a printer that will not print, or a laptop that freezes. She follows a checklist: first she asks questions, then she tries a simple fix such as a reboot or a password reset.

If the problem is serious, for example a server outage, she escalates it to the DevOps team. They check the logs, find the root cause, and fix it. If the system is down, the on-call engineer can roll back the last release. Afterwards, the team writes a postmortem so the same problem does not happen again.

Mai also updates the knowledge base with simple guides, which reduces the number of repeated tickets.`,
        items: [
          tf(
            "Mai works as a software tester.",
            false,
            "Đoạn 1: làm ở **help desk**.",
            "help desk.",
          ),
          tf(
            "She follows a checklist for each ticket.",
            true,
            "Đoạn 1.",
            "checklist.",
          ),
          tf(
            "Serious problems are escalated to the DevOps team.",
            true,
            "Đoạn 2.",
            "escalates.",
          ),
          tf(
            "The postmortem is written before the problem happens.",
            false,
            "Đoạn 2: viết **sau** sự cố.",
            "Afterwards.",
          ),
          tf(
            "The knowledge base reduces repeated tickets.",
            true,
            "Đoạn 3.",
            "reduces.",
          ),
          mc(
            "Which is a simple fix mentioned?",
            [
              "A reboot",
              "Buying a server",
              "Rewriting the app",
              "Changing the cable",
            ],
            0,
            "Đoạn 1: khởi động lại.",
            "reboot.",
          ),
          mc(
            "Who can roll back the release?",
            ["The on-call engineer", "The customer", "The printer", "Nobody"],
            0,
            "Đoạn 2.",
            "on-call.",
          ),
          mc(
            "What do DevOps engineers check first?",
            ["The logs", "The menu", "The keyboard", "The invoice"],
            0,
            "Đoạn 2.",
            "logs.",
          ),
          mc(
            "Why is the postmortem written?",
            [
              "To prevent the same problem again",
              "To blame someone",
              "To save money",
              "To sell software",
            ],
            0,
            "Đoạn 2.",
            "prevent.",
          ),
          mc(
            "What does Mai add to the knowledge base?",
            ["Simple guides", "Passwords", "Servers", "Invoices"],
            0,
            "Đoạn 3.",
            "guides.",
          ),
          mc(
            'The word "escalates" means:',
            ["sends to a higher level", "deletes", "installs", "copies"],
            0,
            "escalate = chuyển cấp.",
            "escalate.",
          ),
          mc(
            "What is the main idea?",
            [
              "IT support solves problems step by step and learns from incidents",
              "Printers are bad",
              "DevOps is easy",
              "Tickets are rare",
            ],
            0,
            "Ý chính.",
            "main idea.",
          ),
        ],
      },
    ],
  },
};

/* ================= WORD BANK (Công nghệ thông tin) ================= */
(function () {
  const RAW = {
    1: `requirement|yêu cầu (phần mềm)
specification|bản đặc tả
stakeholder|bên liên quan
feasibility study|nghiên cứu khả thi
use case|ca sử dụng
user story|câu chuyện người dùng
prototype|bản mẫu thử nghiệm
architecture|kiến trúc
design pattern|mẫu thiết kế
module|mô-đun
component|thành phần
interface|giao diện
abstraction|sự trừu tượng hóa
encapsulation|sự đóng gói
inheritance|sự kế thừa
polymorphism|tính đa hình
algorithm|thuật toán
data structure|cấu trúc dữ liệu
source code|mã nguồn
compiler|trình biên dịch
interpreter|trình thông dịch
debugger|trình gỡ lỗi
bug|lỗi phần mềm
defect|khiếm khuyết
refactoring|tái cấu trúc mã
technical debt|nợ kỹ thuật
code review|rà soát mã
pull request|yêu cầu hợp nhất mã
version control|quản lý phiên bản
repository|kho mã nguồn
branch|nhánh (mã nguồn)
merge|hợp nhất
commit|lưu thay đổi vào kho mã
conflict|xung đột (mã)
release|bản phát hành
deployment|triển khai
maintenance|bảo trì
legacy system|hệ thống cũ
scalability|khả năng mở rộng
reliability|độ tin cậy
maintainability|khả năng bảo trì
usability|tính dễ sử dụng
performance|hiệu năng
waterfall model|mô hình thác nước
agile|phương pháp linh hoạt
scrum|khung làm việc Scrum
sprint|chặng nước rút (chu kỳ ngắn)
backlog|danh sách công việc tồn
iteration|vòng lặp phát triển
stand-up meeting|họp đứng hằng ngày
retrospective|buổi nhìn lại, rút kinh nghiệm
kanban|bảng Kanban
unit test|kiểm thử đơn vị
integration test|kiểm thử tích hợp
regression test|kiểm thử hồi quy
acceptance test|kiểm thử chấp nhận
test case|ca kiểm thử
test coverage|độ phủ kiểm thử
quality assurance|đảm bảo chất lượng
UML diagram|sơ đồ UML
class diagram|sơ đồ lớp
flowchart|lưu đồ
pseudocode|mã giả
documentation|tài liệu kỹ thuật
framework|khung phần mềm
library|thư viện
API|giao diện lập trình ứng dụng
dependency|sự phụ thuộc
open source|mã nguồn mở
license|giấy phép
patch|bản vá
hotfix|bản sửa lỗi khẩn cấp
rollback|quay lui về bản trước
milestone|cột mốc
deadline|hạn chót
estimate|ước tính
risk management|quản lý rủi ro
project manager|quản lý dự án
software architect|kiến trúc sư phần mềm
developer|lập trình viên
tester|kiểm thử viên
product owner|chủ sản phẩm
end user|người dùng cuối
workflow|quy trình làm việc
traceability|khả năng truy vết`,
    2: `HTML|ngôn ngữ đánh dấu siêu văn bản
CSS|ngôn ngữ định kiểu
JavaScript|ngôn ngữ lập trình web
front-end|phần giao diện người dùng
back-end|phần xử lý phía máy chủ
full-stack|toàn bộ (front-end và back-end)
responsive design|thiết kế đáp ứng nhiều màn hình
layout|bố cục
viewport|vùng hiển thị
breakpoint|điểm ngắt (kích thước màn hình)
element|phần tử
attribute|thuộc tính
selector|bộ chọn
DOM|mô hình đối tượng tài liệu
event handler|trình xử lý sự kiện
callback|hàm gọi lại
asynchronous|bất đồng bộ
promise|đối tượng hứa hẹn (kết quả tương lai)
framework|khung phát triển
library|thư viện
package manager|trình quản lý gói
bundler|công cụ đóng gói mã
component|thành phần giao diện
state|trạng thái
props|thuộc tính truyền vào thành phần
routing|định tuyến
single-page application|ứng dụng một trang
server-side rendering|kết xuất phía máy chủ
client|máy khách
server|máy chủ
request|yêu cầu
response|phản hồi
endpoint|điểm cuối API
REST API|API theo kiến trúc REST
JSON|định dạng dữ liệu JSON
authentication|xác thực
authorization|phân quyền
session|phiên làm việc
cookie|tệp cookie
token|mã thông báo
middleware|phần mềm trung gian
database query|truy vấn cơ sở dữ liệu
hosting|dịch vụ lưu trữ web
domain name|tên miền
SSL certificate|chứng chỉ SSL
cache|bộ nhớ đệm
latency|độ trễ
load time|thời gian tải trang
accessibility|khả năng truy cập (cho mọi người)
cross-browser|tương thích nhiều trình duyệt
user interface|giao diện người dùng
user experience|trải nghiệm người dùng
wireframe|khung sườn thiết kế
mockup|bản dựng giao diện
animation|hoạt ảnh
form validation|kiểm tra dữ liệu biểu mẫu
native app|ứng dụng gốc
hybrid app|ứng dụng lai
cross-platform|đa nền tảng
Android|hệ điều hành Android
iOS|hệ điều hành iOS
SDK|bộ công cụ phát triển phần mềm
emulator|trình giả lập
simulator|trình mô phỏng
app store|cửa hàng ứng dụng
push notification|thông báo đẩy
touch gesture|cử chỉ chạm
swipe|vuốt
tap|chạm
screen size|kích thước màn hình
resolution|độ phân giải
battery life|thời lượng pin
offline mode|chế độ ngoại tuyến
permission|quyền truy cập
sensor|cảm biến
geolocation|định vị địa lý
in-app purchase|mua hàng trong ứng dụng
update|bản cập nhật
crash|sự cố treo ứng dụng
build|bản dựng
debugging|gỡ lỗi
version|phiên bản
progressive web app|ứng dụng web tiến bộ
web socket|kết nối hai chiều thời gian thực
deep link|liên kết sâu
lazy loading|tải chậm theo nhu cầu
minify|rút gọn mã
compatibility|tính tương thích
template|khuôn mẫu
plugin|phần mở rộng
content management system|hệ quản trị nội dung
landing page|trang đích
navigation bar|thanh điều hướng
dropdown menu|menu thả xuống
hyperlink|siêu liên kết
metadata|siêu dữ liệu`,
    3: `game engine|công cụ phát triển game
gameplay|lối chơi
game design|thiết kế game
level design|thiết kế màn chơi
game mechanic|cơ chế trò chơi
storyline|cốt truyện
character|nhân vật
avatar|hình đại diện
non-player character|nhân vật do máy điều khiển
boss|trùm cuối
quest|nhiệm vụ
mission|nhiệm vụ chính
objective|mục tiêu
reward|phần thưởng
power-up|vật phẩm tăng sức mạnh
inventory|túi đồ
health bar|thanh máu
score|điểm số
leaderboard|bảng xếp hạng
checkpoint|điểm lưu tiến trình
save game|lưu trò chơi
difficulty|độ khó
tutorial|phần hướng dẫn
sprite|hình ảnh 2D của vật thể
texture|họa tiết bề mặt
shader|chương trình đổ bóng
rendering|kết xuất hình ảnh
frame rate|tốc độ khung hình
resolution|độ phân giải
polygon|đa giác
3D model|mô hình 3D
animation|hoạt ảnh
rigging|gắn khung xương
particle effect|hiệu ứng hạt
lighting|ánh sáng
camera|máy quay trong game
collision detection|phát hiện va chạm
physics engine|công cụ vật lý
hitbox|vùng nhận sát thương
spawn|xuất hiện (sinh ra)
respawn|hồi sinh
pathfinding|tìm đường
artificial intelligence|trí tuệ nhân tạo
game loop|vòng lặp trò chơi
asset|tài nguyên (hình, âm thanh)
scene|cảnh
prefab|mẫu đối tượng dựng sẵn
script|đoạn mã điều khiển
Unity|nền tảng Unity
Unreal Engine|nền tảng Unreal Engine
sound effect|hiệu ứng âm thanh
soundtrack|nhạc nền
voice acting|lồng tiếng
user interface|giao diện người dùng
HUD|giao diện hiển thị trên màn hình
controller|tay cầm điều khiển
joystick|cần điều khiển
keyboard shortcut|phím tắt
single-player|chơi đơn
multiplayer|nhiều người chơi
co-op|chơi hợp tác
matchmaking|ghép trận
lag|độ trễ gây giật
ping|độ trễ mạng
server|máy chủ
patch|bản vá
update|bản cập nhật
beta test|thử nghiệm bản beta
alpha version|phiên bản alpha
playtesting|thử nghiệm với người chơi
bug|lỗi
glitch|lỗi nhỏ gây hiện tượng lạ
publisher|nhà phát hành
indie developer|nhà phát triển độc lập
monetization|kiếm tiền từ game
microtransaction|giao dịch vi mô
season pass|thẻ mùa
downloadable content|nội dung tải thêm
open world|thế giới mở
sandbox|thế giới tự do sáng tạo
puzzle|giải đố
platformer|game đi cảnh
role-playing game|game nhập vai
first-person shooter|game bắn súng góc nhìn thứ nhất
esports|thể thao điện tử
streamer|người phát trực tiếp
virtual reality|thực tế ảo
augmented reality|thực tế tăng cường
cross-platform|đa nền tảng
mod|bản chỉnh sửa do người chơi tạo
cheat|gian lận
anti-cheat|chống gian lận
achievement|thành tựu
easter egg|chi tiết ẩn thú vị`,
    4: `blockchain|chuỗi khối
block|khối
ledger|sổ cái
distributed ledger|sổ cái phân tán
decentralized|phi tập trung
node|nút mạng
miner|thợ đào
mining|khai thác (đào)
consensus|sự đồng thuận
proof of work|bằng chứng công việc
proof of stake|bằng chứng cổ phần
hash|hàm băm
cryptography|mật mã học
public key|khóa công khai
private key|khóa riêng
digital signature|chữ ký số
wallet|ví tiền điện tử
cryptocurrency|tiền mã hóa
Bitcoin|đồng Bitcoin
Ethereum|nền tảng Ethereum
token|token (đơn vị số)
coin|đồng coin
stablecoin|đồng tiền ổn định giá
transaction|giao dịch
transaction fee|phí giao dịch
gas fee|phí gas
smart contract|hợp đồng thông minh
decentralized application|ứng dụng phi tập trung
Web3|thế hệ web thứ ba
DeFi|tài chính phi tập trung
NFT|tài sản số không thể thay thế
DAO|tổ chức tự trị phi tập trung
metaverse|vũ trụ ảo
airdrop|phát token miễn phí
staking|gửi cổ phần để nhận thưởng
yield farming|canh tác lợi suất
liquidity|tính thanh khoản
exchange|sàn giao dịch
trading|giao dịch mua bán
volatility|sự biến động
market cap|vốn hóa thị trường
whitepaper|sách trắng
initial coin offering|chào bán coin lần đầu
fork|sự phân tách chuỗi
hard fork|phân nhánh cứng
immutable|bất biến
transparent|minh bạch
tamper-proof|chống giả mạo
double spending|chi tiêu hai lần
51% attack|tấn công 51%
seed phrase|cụm từ khôi phục ví
cold wallet|ví lạnh
hot wallet|ví nóng
two-factor authentication|xác thực hai yếu tố
phishing|lừa đảo giả mạo
rug pull|rút thanh khoản bỏ trốn
scam|vụ lừa đảo
regulation|quy định pháp lý
compliance|sự tuân thủ
audit|kiểm toán
peer-to-peer|ngang hàng
validator|người xác thực
block height|chiều cao khối
genesis block|khối khởi nguyên
Layer 2|giải pháp lớp hai
sidechain|chuỗi phụ
oracle|nguồn dữ liệu bên ngoài cho hợp đồng thông minh
interoperability|khả năng tương tác giữa các chuỗi
bridge|cầu nối chuỗi
tokenomics|kinh tế học token
supply chain|chuỗi cung ứng
traceability|khả năng truy vết
digital identity|danh tính số
self-custody|tự quản lý tài sản
mint|đúc (tạo) token
burn|đốt (hủy) token
wrapped token|token bọc
open source|mã nguồn mở`,
    5: `artificial intelligence|trí tuệ nhân tạo
machine learning|học máy
deep learning|học sâu
neural network|mạng nơ-ron
algorithm|thuật toán
model|mô hình
training data|dữ liệu huấn luyện
test data|dữ liệu kiểm tra
dataset|tập dữ liệu
feature|đặc trưng
label|nhãn
supervised learning|học có giám sát
unsupervised learning|học không giám sát
reinforcement learning|học tăng cường
classification|phân loại
regression|hồi quy
clustering|phân cụm
prediction|dự đoán
accuracy|độ chính xác
precision|độ chuẩn xác
recall|độ phủ (độ nhạy)
overfitting|quá khớp
underfitting|chưa khớp
bias|thiên lệch
variance|phương sai
noise|nhiễu
outlier|giá trị ngoại lai
missing value|giá trị bị thiếu
data cleaning|làm sạch dữ liệu
data preprocessing|tiền xử lý dữ liệu
normalization|chuẩn hóa
data mining|khai phá dữ liệu
big data|dữ liệu lớn
data science|khoa học dữ liệu
data scientist|nhà khoa học dữ liệu
data analyst|nhà phân tích dữ liệu
data visualization|trực quan hóa dữ liệu
dashboard|bảng điều khiển
chart|biểu đồ
histogram|biểu đồ tần suất
correlation|sự tương quan
average|giá trị trung bình
median|trung vị
standard deviation|độ lệch chuẩn
probability|xác suất
sample|mẫu
population|tổng thể
hypothesis|giả thuyết
statistics|thống kê
natural language processing|xử lý ngôn ngữ tự nhiên
computer vision|thị giác máy tính
speech recognition|nhận dạng giọng nói
image recognition|nhận dạng hình ảnh
chatbot|trò chuyện tự động
recommendation system|hệ thống gợi ý
generative AI|AI tạo sinh
large language model|mô hình ngôn ngữ lớn
prompt|câu lệnh gợi ý đầu vào
token|đơn vị văn bản
hallucination|hiện tượng AI bịa thông tin
fine-tuning|tinh chỉnh mô hình
inference|suy luận (chạy mô hình)
parameter|tham số
layer|lớp (mạng nơ-ron)
epoch|vòng huấn luyện
loss function|hàm mất mát
gradient descent|thuật toán giảm dần độ dốc
backpropagation|lan truyền ngược
decision tree|cây quyết định
random forest|rừng ngẫu nhiên
support vector machine|máy vectơ hỗ trợ
anomaly detection|phát hiện bất thường
automation|sự tự động hóa
robotics|ngành người máy
autonomous vehicle|xe tự lái
ethics|đạo đức
privacy|quyền riêng tư
fairness|sự công bằng
transparency|sự minh bạch
explainability|khả năng giải thích
deployment|triển khai
pipeline|quy trình xử lý dữ liệu
benchmark|chuẩn đánh giá
Python|ngôn ngữ Python
notebook|sổ tay lập trình
library|thư viện
GPU|bộ xử lý đồ họa
cloud|đám mây
insight|thông tin chi tiết rút ra`,
    6: `database|cơ sở dữ liệu
relational database|cơ sở dữ liệu quan hệ
NoSQL|cơ sở dữ liệu phi quan hệ
table|bảng
row|dòng (bản ghi)
column|cột
record|bản ghi
field|trường
primary key|khóa chính
foreign key|khóa ngoại
index|chỉ mục
query|truy vấn
SQL|ngôn ngữ truy vấn có cấu trúc
join|phép nối bảng
schema|lược đồ
normalization|chuẩn hóa dữ liệu
transaction|giao dịch
commit|xác nhận giao dịch
rollback|hoàn tác giao dịch
backup|sao lưu
restore|khôi phục
replication|sao chép dữ liệu
data integrity|tính toàn vẹn dữ liệu
DBMS|hệ quản trị cơ sở dữ liệu
stored procedure|thủ tục lưu sẵn
trigger|bộ kích hoạt
view|bảng ảo (khung nhìn)
data warehouse|kho dữ liệu
data lake|hồ dữ liệu
cloud computing|điện toán đám mây
public cloud|đám mây công cộng
private cloud|đám mây riêng
hybrid cloud|đám mây lai
IaaS|hạ tầng như một dịch vụ
PaaS|nền tảng như một dịch vụ
SaaS|phần mềm như một dịch vụ
virtual machine|máy ảo
container|vùng chứa (container)
serverless|không máy chủ
storage|lưu trữ
bandwidth|băng thông
scalability|khả năng mở rộng
elasticity|tính co giãn
availability|tính sẵn sàng
redundancy|dự phòng
disaster recovery|khôi phục sau thảm họa
uptime|thời gian hoạt động liên tục
downtime|thời gian ngừng hoạt động
load balancer|bộ cân bằng tải
data center|trung tâm dữ liệu
region|vùng (địa lý đám mây)
instance|phiên bản máy chủ ảo
subscription|gói đăng ký
pay-as-you-go|trả theo mức dùng
cost optimization|tối ưu chi phí
migration|sự di chuyển (dữ liệu, hệ thống)
latency|độ trễ
throughput|thông lượng
sharding|phân mảnh dữ liệu
cluster|cụm máy chủ
high availability|tính sẵn sàng cao
encryption|mã hóa
access control|kiểm soát truy cập
compliance|sự tuân thủ
service level agreement|thỏa thuận mức dịch vụ
multi-tenant|đa người thuê
API gateway|cổng API
object storage|lưu trữ đối tượng
block storage|lưu trữ khối
snapshot|bản chụp trạng thái
monitoring|giám sát
logging|ghi nhật ký
metric|chỉ số đo lường
alert|cảnh báo
auto scaling|tự động mở rộng
deployment|triển khai
vendor lock-in|bị ràng buộc nhà cung cấp
data residency|nơi lưu trữ dữ liệu`,
    7: `cybersecurity|an ninh mạng
threat|mối đe dọa
vulnerability|lỗ hổng bảo mật
exploit|khai thác lỗ hổng
attack|cuộc tấn công
attacker|kẻ tấn công
hacker|tin tặc
malware|phần mềm độc hại
virus|vi-rút máy tính
worm|sâu máy tính
trojan|phần mềm độc hại ngụy trang
ransomware|mã độc tống tiền
spyware|phần mềm gián điệp
botnet|mạng máy bị chiếm quyền
phishing|lừa đảo giả mạo
social engineering|kỹ nghệ xã hội
brute force|tấn công dò mật khẩu
DDoS attack|tấn công từ chối dịch vụ phân tán
data breach|vụ rò rỉ dữ liệu
zero-day|lỗ hổng chưa có bản vá
firewall|tường lửa
antivirus|phần mềm diệt vi-rút
encryption|mã hóa
decryption|giải mã
password|mật khẩu
authentication|xác thực
authorization|phân quyền
two-factor authentication|xác thực hai yếu tố
biometric|sinh trắc học
VPN|mạng riêng ảo
proxy|máy chủ trung gian
intrusion detection|phát hiện xâm nhập
penetration test|kiểm thử xâm nhập
security patch|bản vá bảo mật
incident response|ứng phó sự cố
forensics|điều tra pháp y số
backup|sao lưu
risk assessment|đánh giá rủi ro
network|mạng máy tính
router|bộ định tuyến
switch|bộ chuyển mạch
modem|bộ điều chế
gateway|cổng kết nối
IP address|địa chỉ IP
MAC address|địa chỉ MAC
subnet|mạng con
protocol|giao thức
packet|gói dữ liệu
bandwidth|băng thông
latency|độ trễ
LAN|mạng cục bộ
WAN|mạng diện rộng
Wi-Fi|mạng không dây
Ethernet|mạng Ethernet
cable|dây cáp
topology|cấu trúc liên kết mạng
DNS|hệ thống tên miền
DHCP|giao thức cấp phát IP động
HTTP|giao thức truyền siêu văn bản
HTTPS|HTTP có bảo mật
TCP|giao thức điều khiển truyền
port|cổng
traffic|lưu lượng mạng
sniffing|nghe lén gói tin
spoofing|giả mạo
access point|điểm truy cập
signal strength|cường độ tín hiệu
network administrator|quản trị viên mạng
security policy|chính sách bảo mật
compliance|sự tuân thủ`,
    8: `DevOps|văn hóa phối hợp phát triển và vận hành
continuous integration|tích hợp liên tục
continuous delivery|phân phối liên tục
pipeline|đường ống tự động hóa
build|bản dựng
automation|sự tự động hóa
infrastructure as code|hạ tầng dưới dạng mã
configuration management|quản lý cấu hình
container|vùng chứa
orchestration|điều phối
deployment|triển khai
rollout|sự triển khai dần
rollback|quay lui bản triển khai
monitoring|giám sát
logging|ghi nhật ký
alert|cảnh báo
incident|sự cố
outage|sự cố mất dịch vụ
uptime|thời gian hoạt động
on-call|trực sẵn sàng xử lý
postmortem|báo cáo sau sự cố
root cause|nguyên nhân gốc rễ
workaround|giải pháp tạm thời
troubleshooting|khắc phục sự cố
diagnose|chẩn đoán
help desk|bộ phận hỗ trợ kỹ thuật
service desk|trung tâm dịch vụ
ticket|phiếu yêu cầu hỗ trợ
priority|mức độ ưu tiên
escalate|chuyển lên cấp cao hơn
resolve|giải quyết
resolution time|thời gian xử lý
first-line support|hỗ trợ tuyến đầu
user account|tài khoản người dùng
password reset|đặt lại mật khẩu
remote access|truy cập từ xa
remote desktop|máy tính từ xa
install|cài đặt
uninstall|gỡ cài đặt
upgrade|nâng cấp
update|cập nhật
driver|trình điều khiển thiết bị
operating system|hệ điều hành
firmware|phần sụn
hardware|phần cứng
software|phần mềm
peripheral|thiết bị ngoại vi
printer|máy in
monitor|màn hình
keyboard|bàn phím
laptop|máy tính xách tay
server|máy chủ
workstation|máy trạm
network cable|cáp mạng
power supply|nguồn điện
backup|sao lưu
restore|khôi phục
patch management|quản lý bản vá
asset management|quản lý tài sản CNTT
inventory|bản kê tài sản
license|giấy phép phần mềm
knowledge base|cơ sở tri thức
FAQ|câu hỏi thường gặp
user manual|sách hướng dẫn sử dụng
service level agreement|thỏa thuận mức dịch vụ
customer satisfaction|sự hài lòng của khách hàng
shell script|tập lệnh dòng lệnh
command line|dòng lệnh
cron job|tác vụ chạy theo lịch
version control|quản lý phiên bản
staging environment|môi trường thử nghiệm
production|môi trường thực tế
downtime|thời gian ngừng hoạt động
reboot|khởi động lại
freeze|treo máy
blue screen|màn hình xanh báo lỗi
error message|thông báo lỗi
log file|tệp nhật ký`,
  };

  /* hover glossary (từ đơn): tự sinh từ Word Bank + một số từ thông dụng */
  const EXTRA = `code=mã (nguồn)
data=dữ liệu
file=tệp
user=người dùng
users=người dùng
server=máy chủ
network=mạng
system=hệ thống
software=phần mềm
hardware=phần cứng
program=chương trình
error=lỗi
errors=lỗi
fix=sửa lỗi
fixed=đã sửa
test=kiểm thử
tests=kiểm thử
testing=đang kiểm thử
release=bản phát hành
version=phiên bản
update=cập nhật
install=cài đặt
download=tải xuống
upload=tải lên
click=nhấp chuột
password=mật khẩu
email=thư điện tử
website=trang web
page=trang
app=ứng dụng
application=ứng dụng
developer=lập trình viên
developers=lập trình viên
engineer=kỹ sư
team=đội nhóm
project=dự án
customer=khách hàng
customers=khách hàng
employee=nhân viên
manager=quản lý
support=hỗ trợ
problem=vấn đề
issue=vấn đề, sự cố
solve=giải quyết
solved=đã giải quyết
store=lưu trữ / cửa hàng
stored=được lưu trữ
secure=an toàn
safe=an toàn
risk=rủi ro
attack=cuộc tấn công
protect=bảo vệ
privacy=quyền riêng tư
faster=nhanh hơn
slower=chậm hơn
better=tốt hơn
easier=dễ hơn
stronger=mạnh hơn
cheaper=rẻ hơn
automatically=một cách tự động
automated=được tự động hóa
regularly=thường xuyên
quickly=nhanh chóng
slowly=chậm rãi
fake=giả
real=thật
link=liên kết
screen=màn hình
button=nút bấm
device=thiết bị
phone=điện thoại
computer=máy tính
laptop=máy tính xách tay
print=in
printer=máy in
camera=máy ảnh
player=người chơi
players=người chơi
level=màn chơi / cấp độ
game=trò chơi
games=trò chơi
score=điểm số
coin=đồng xu / coin
coins=đồng xu
wallet=ví
block=khối
chain=chuỗi
model=mô hình
images=hình ảnh
image=hình ảnh
accurate=chính xác
accuracy=độ chính xác
bias=thiên lệch
trained=đã được huấn luyện
cloud=đám mây
database=cơ sở dữ liệu
backup=sao lưu
backups=bản sao lưu
migration=sự di chuyển
traffic=lưu lượng
downtime=thời gian ngừng hoạt động
outage=sự cố mất dịch vụ
ticket=phiếu hỗ trợ
tickets=phiếu hỗ trợ
reboot=khởi động lại
restart=khởi động lại
reset=đặt lại
escalate=chuyển cấp
escalates=chuyển cấp
logs=nhật ký
checklist=danh sách kiểm tra`;

  const ROOTS = [
    ["p", "cyber", "mạng, không gian số"],
    ["p", "micro", "nhỏ"],
    ["p", "macro", "lớn"],
    ["p", "multi", "nhiều"],
    ["p", "inter", "giữa, liên"],
    ["p", "auto", "tự động"],
    ["p", "crypto", "mật mã, ẩn"],
    ["p", "bio", "sinh học"],
    ["p", "tele", "từ xa"],
    ["p", "data", "dữ liệu"],
    ["p", "net", "mạng"],
    ["p", "web", "web, mạng"],
    ["p", "geo", "địa lý"],
    ["p", "re", "lại"],
    ["p", "de", "bỏ, giảm"],
    ["p", "sub", "dưới"],
    ["p", "multi", "nhiều"],
    ["s", "ware", "phần (mềm/cứng)"],
    ["s", "ware", "phần (mềm/cứng)"],
    ["s", "able", "có thể"],
    ["s", "ability", "khả năng"],
    ["s", "ization", "sự hóa"],
    ["s", "ment", "sự, việc"],
    ["s", "tion", "sự, quá trình"],
    ["s", "ing", "đang, việc"],
    ["s", "ify", "làm cho"],
    ["s", "ize", "hóa"],
    ["s", "less", "không có"],
    ["s", "ful", "đầy"],
    ["s", "er", "người/thiết bị làm"],
    ["s", "ity", "tính chất"],
    ["i", "code", "mã"],
    ["i", "chain", "chuỗi"],
    ["i", "block", "khối"],
    ["i", "cloud", "đám mây"],
    ["i", "secur", "an toàn"],
    ["i", "graph", "đồ thị, ghi"],
    ["i", "scal", "quy mô"],
  ];
  function rootTip(en) {
    if (/[\s\/\(\)]/.test(en) || /^-|-$|\/o$/.test(en)) return null;
    const w = en.toLowerCase().replace(/^-|-$/g, "");
    const hits = [];
    ROOTS.forEach(([t, r, m]) => {
      if (w === r) return;
      if (
        (t === "p" && w.startsWith(r)) ||
        (t === "s" && w.endsWith(r)) ||
        (t === "i" && w.includes(r))
      )
        hits.push([r, m, t]);
    });
    if (!hits.length) return null;
    const seen = [];
    const out = [];
    hits
      .sort((a, b) => b[0].length - a[0].length)
      .forEach((h) => {
        if (seen.some((s) => s.includes(h[0]) || h[0].includes(s))) return;
        seen.push(h[0]);
        out.push(h);
      });
    return (
      "Tách gốc từ: " +
      out
        .slice(0, 3)
        .map(
          (h) =>
            (h[2] === "s" ? "-" : "") +
            h[0] +
            (h[2] === "p" ? "-" : "") +
            " = " +
            h[1],
        )
        .join(" · ")
    );
  }
  const rnd = (a) =>
    a
      .map((x) => [Math.random(), x])
      .sort((p, q) => p[0] - q[0])
      .map((p) => p[1]);
  window.GLOSS =
    EXTRA +
    "\n" +
    Object.keys(RAW)
      .map((n) => RAW[n])
      .join("\n")
      .split("\n")
      .filter((l) => /^[A-Za-z][A-Za-z\-]*\|/.test(l.trim()))
      .map((l) => {
        const i = l.indexOf("|");
        return l.slice(0, i).trim().toLowerCase() + "=" + l.slice(i + 1).trim();
      })
      .join("\n");
  window.WORDS = {};
  window.rootTip = rootTip;
  Object.keys(RAW).forEach((n) => {
    const W = RAW[n]
      .trim()
      .split("\n")
      .map((l) => {
        l = l.trim();
        const i = l.indexOf("|");
        return { en: l.slice(0, i).trim(), vi: l.slice(i + 1).trim() };
      })
      .filter((w) => w.en && w.vi);
    window.WORDS[n] = W;
    const pick = (k) => rnd(W).slice(0, Math.min(k, W.length));
    const choices = (w, f) => {
      const seen = new Set([w[f]]),
        ds = [];
      for (const x of rnd(W)) {
        if (seen.has(x[f])) continue;
        seen.add(x[f]);
        ds.push(x);
        if (ds.length === 3) break;
      }
      return rnd([w].concat(ds));
    };
    const genEV = () =>
      pick(15).map((w) => {
        const all = choices(w, "vi"),
          idx = all.indexOf(w);
        return mc(
          w.en,
          all.map((x) => x.vi),
          idx,
          `**${w.en}** = ${w.vi}.`,
          all.map((x, i) =>
            i === idx
              ? null
              : `"${x.vi}" là nghĩa của **${x.en}**, không phải của "${w.en}".`,
          ),
          rootTip(w.en),
          { fixed: 1 },
        );
      });
    const genVE = () =>
      pick(15).map((w) => {
        const all = choices(w, "en"),
          idx = all.indexOf(w);
        return mc(
          w.vi,
          all.map((x) => x.en),
          idx,
          `**${w.vi}** = **${w.en}**.`,
          all.map((x, i) =>
            i === idx
              ? null
              : `"${x.en}" nghĩa là "${x.vi}", không phải "${w.vi}".`,
          ),
          rootTip(w.en),
          { fixed: 1 },
        );
      });
    const typeable = W.filter(
      (w) => /^[A-Za-z][A-Za-z\-' ]{3,26}$/.test(w.en) && !/-$|^-/.test(w.en),
    );
    const genType = () =>
      rnd(typeable)
        .slice(0, 10)
        .map((w) =>
          fl(
            `${w.vi} → ___`,
            [[w.en]],
            `Từ cần gõ là **${w.en}** (= ${w.vi}).`,
            rootTip(w.en),
          ),
        );
    const cards = W.map((w) => ({
      k: "card",
      q: w.en,
      en: w.en,
      vi: w.vi,
      why: `**${w.en}** = ${w.vi}.`,
      tip: rootTip(w.en),
    }));
    U[n].sec.bank = [
      {
        t: "Danh sách từ vựng",
        ins: 'Bấm vào từ để nghe phát âm. Bật "Che nghĩa" để tự kiểm tra.',
        isList: 1,
        noscore: 1,
        words: W,
        items: [],
      },
      {
        t: "Thẻ ghi nhớ (Flashcards)",
        ins: "Bấm vào thẻ để lật. Tự chấm: đã thuộc hay chưa thuộc.",
        isCards: 1,
        items: cards,
      },
      {
        t: "Trắc nghiệm: Anh → Việt",
        ins: "Chọn nghĩa tiếng Việt đúng của từ (15 từ ngẫu nhiên).",
        gen: genEV,
        items: genEV(),
      },
      {
        t: "Trắc nghiệm: Việt → Anh",
        ins: "Chọn từ tiếng Anh đúng với nghĩa tiếng Việt (15 từ ngẫu nhiên).",
        gen: genVE,
        items: genVE(),
      },
      {
        t: "Gõ từ tiếng Anh",
        ins: "Nhìn nghĩa tiếng Việt, gõ từ tiếng Anh (10 từ ngẫu nhiên).",
        gen: genType,
        items: genType(),
      },
    ];
  });
})();

/* ================= ENGINE ================= */
(function () {
  "use strict";
  const $ = (s) => document.querySelector(s);
  const esc = (s) =>
    String(s == null ? "" : s).replace(
      /[&<>"]/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
    );
  const md = (s) =>
    esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
      .replace(/\n/g, "<br>");
  const words = (t) =>
    String(t)
      .split(/([A-Za-z][A-Za-z’'\-]*)/)
      .map((p, i) => (i % 2 ? `<span class="w">${esc(p)}</span>` : esc(p)))
      .join("");
  const LET = "ABCDEFGHIJKLMNOP";
  const SEC = {
    bank: { n: "Word Bank", vi: "Từ vựng & thẻ ghi nhớ", ic: "🗂️" },
    vocab: { n: "Vocabulary", vi: "Từ vựng", ic: "📚" },
    lang: { n: "Language Spot", vi: "Ngữ pháp", ic: "🧩" },
    read: { n: "Reading", vi: "Đọc hiểu", ic: "📖" },
  };
  const U = window.U,
    GLOSS = window.GLOSS;

  /* ---------- glossary ---------- */
  const GL = {};
  GLOSS.split("\n").forEach((l) => {
    const i = l.indexOf("=");
    if (i > 0) GL[l.slice(0, i).trim().toLowerCase()] = l.slice(i + 1).trim();
  });
  if (window.WORDS)
    Object.keys(window.WORDS).forEach((n) =>
      window.WORDS[n].forEach((w) => {
        const k = w.en.toLowerCase().replace(/^-|-$/g, "");
        if (k && !GL[k]) GL[k] = w.vi;
        GL[w.en.toLowerCase()] = GL[w.en.toLowerCase()] || w.vi;
      }),
    );
  function cands(w) {
    w = w.toLowerCase().replace(/[’]/g, "'");
    const c = [w, w.replace(/'s$/, "")];
    [
      [/ies$/, "y"],
      [/es$/, ""],
      [/s$/, ""],
      [/ed$/, ""],
      [/ed$/, "e"],
      [/d$/, ""],
      [/ing$/, ""],
      [/ing$/, "e"],
      [/ly$/, ""],
      [/ily$/, "y"],
      [/er$/, ""],
      [/er$/, "e"],
      [/est$/, ""],
      [/ier$/, "y"],
      [/iest$/, "y"],
      [/ally$/, "al"],
      [/ically$/, "ic"],
    ].forEach(([r, s]) => {
      if (r.test(w)) c.push(w.replace(r, s));
    });
    if (/(.)\1ing$/.test(w)) c.push(w.replace(/(.)\1ing$/, "$1"));
    return c;
  }
  function glossLookup(w) {
    for (const c of cands(w)) {
      if (GL[c]) return GL[c];
    }
    return null;
  }
  const cache = new Map();
  async function apiTr(text) {
    const k = text.toLowerCase();
    if (cache.has(k)) return cache.get(k);
    const ctrl = new AbortController();
    const to = setTimeout(() => ctrl.abort(), 7000);
    try {
      const r = await fetch(
        "https://api.mymemory.translated.net/get?q=" +
          encodeURIComponent(text) +
          "&langpair=en|vi",
        { signal: ctrl.signal },
      );
      const j = await r.json();
      let t = (j.responseData && j.responseData.translatedText) || "";
      if (!t || /MYMEMORY WARNING|QUERY LENGTH/i.test(t)) throw 0;
      cache.set(k, t);
      return t;
    } catch (e) {
      return null;
    } finally {
      clearTimeout(to);
    }
  }
  async function translate(text) {
    const g = GL[text.toLowerCase().trim()] || glossLookup(text.trim());
    if (g && !/\s/.test(text.trim())) return g;
    if (GL[text.toLowerCase().trim()]) return GL[text.toLowerCase().trim()];
    return await apiTr(text);
  }

  /* ---------- speech ---------- */
  let voice = null;
  function pickVoice() {
    const v = speechSynthesis.getVoices();
    voice =
      v.find(
        (x) =>
          /en[-_]US/i.test(x.lang) &&
          /Google|Samantha|Microsoft|Natural/i.test(x.name),
      ) ||
      v.find((x) => /^en/i.test(x.lang)) ||
      null;
  }
  if ("speechSynthesis" in window) {
    pickVoice();
    speechSynthesis.onvoiceschanged = pickVoice;
  }
  function speak(t) {
    if (!("speechSynthesis" in window))
      return toast("Trình duyệt chưa hỗ trợ phát âm");
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(t);
    u.lang = "en-US";
    u.rate = 0.88;
    if (voice) u.voice = voice;
    speechSynthesis.speak(u);
  }
  function toast(m) {
    const d = document.createElement("div");
    d.className = "toast";
    d.textContent = m;
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 2200);
  }

  /* ---------- tooltip ---------- */
  const tip = $("#tip");
  let tipT = null,
    curWord = "";
  function placeTip(el) {
    const r = el.getBoundingClientRect();
    tip.style.display = "block";
    const tw = tip.offsetWidth,
      th = tip.offsetHeight;
    let x = Math.min(Math.max(8, r.left), innerWidth - tw - 8),
      y = r.bottom + 8;
    if (y + th > innerHeight - 70) y = r.top - th - 8;
    tip.style.left = x + "px";
    tip.style.top = Math.max(8, y) + "px";
  }
  async function showTip(el, pin) {
    clearTimeout(tipT);
    const w = el.textContent;
    curWord = w;
    const g = glossLookup(w);
    tip.innerHTML = `<div class="tw">${esc(w)} <button data-sp="1">🔊</button></div><div class="tv">${g ? esc(g) : "Đang tra…"}</div>`;
    placeTip(el);
    if (!g) {
      const t = await apiTr(w);
      if (curWord !== w) return;
      tip.querySelector(".tv").textContent = t
        ? t
        : "Chưa có trong từ điển offline (cần Internet để tra thêm).";
      placeTip(el);
    }
  }
  function hideTip() {
    tip.style.display = "none";
  }
  document.addEventListener("mouseover", (e) => {
    const w = e.target.closest && e.target.closest(".w");
    if (w) showTip(w, false);
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest && e.target.closest(".w")) {
      clearTimeout(tipT);
      tipT = setTimeout(hideTip, 350);
    }
  });
  tip.addEventListener("mouseenter", () => clearTimeout(tipT));
  tip.addEventListener("mouseleave", () => {
    tipT = setTimeout(hideTip, 250);
  });
  tip.addEventListener("click", (e) => {
    if (e.target.dataset.sp) speak(curWord);
  });
  document.addEventListener("click", (e) => {
    const w = e.target.closest && e.target.closest(".w");
    if (w && !w.closest(".opt")) {
      speak(w.textContent);
      showTip(w, true);
    } else if (w && w.closest(".opt")) {
      showTip(w, true);
    } else if (!e.target.closest("#tip")) hideTip();
  });
  $("#lk").addEventListener("submit", async (e) => {
    e.preventDefault();
    const v = $("#lkin").value.trim();
    if (!v) return;
    speak(v);
    const g = GL[v.toLowerCase()] || glossLookup(v);
    const r = g || (await apiTr(v));
    const box = document.createElement("div");
    tip.innerHTML = `<div class="tw">${esc(v)} <button data-sp="1">🔊</button></div><div class="tv">${esc(r || "Chưa có trong từ điển offline (cần Internet).")}</div>`;
    curWord = v;
    tip.style.display = "block";
    tip.style.left = "auto";
    tip.style.right = "16px";
    tip.style.top = "62px";
    clearTimeout(tipT);
    tipT = setTimeout(() => {
      hideTip();
      tip.style.right = "auto";
    }, 6000);
  });

  /* ---------- MASCOT / HUD / CONFETTI ---------- */
  let STREAK = 0;
  const MSG = {
    hello: [
      "Chào bạn! Hôm nay mình cùng ôn bài nhé! 🐃",
      "Nghé ọ! Sẵn sàng chưa nào? 💪",
      "Mỗi ngày một chút, kiến thức sẽ đầy giỏ! 🧺",
    ],
    correct: [
      "Giỏi quá! 🎉",
      "Chuẩn luôn! ⭐",
      "Đúng rồi, cứ đà này nhé!",
      "Quá đỉnh! 👏",
      "Trâu cũng phải gật đầu khen! 🐃",
    ],
    wrong: [
      "Sai không sao, đọc lời giải thích là nhớ lâu hơn nè!",
      "Cố lên! Mỗi lỗi sai là một bài học 💪",
      "Đừng nản nhé, trâu chậm mà chắc!",
      "Bình tĩnh, lần sau sẽ đúng thôi! 🌱",
    ],
    streak: ["{n} câu đúng liên tiếp! 🔥", "Bốc lửa rồi! {n} câu liền! 🔥🔥"],
    idle: [
      "Kiên trì là chìa khóa! 🔑",
      "Nhớ ngồi thẳng lưng nha 🪑",
      "Học chậm mà chắc, đừng bỏ cuộc!",
      "Một chút nỗ lực mỗi ngày, bạn làm được! 💪",
      "Ôn xong thưởng cho mình món ngon nhé 😋",
      "Trâu tin bạn sẽ vượt qua kỳ thi! 🌟",
      "Từng từ một, bạn đang tiến bộ đó! 📈",
    ],
    water: [
      "Uống nước đi bạn ơi! 💧",
      "Đến giờ uống nước rồi, não cần nước để nhớ bài! 💧",
      "Một ly nước lọc nào! 🥤",
    ],
    rest: [
      "Nghỉ mắt 20 giây, nhìn ra xa một chút nhé 👀",
      "Đứng dậy vươn vai chút nào! 🙆",
      "Hít thở sâu 3 nhịp rồi học tiếp nhé 🌿",
    ],
    done_good: [
      "Xuất sắc! Bài này bạn nắm chắc rồi! 🏆",
      "Điểm cao quá, trâu tự hào về bạn! 🎊",
    ],
    done_mid: ["Khá lắm! Làm lại câu sai là nhớ liền 💪"],
    done_low: ["Không sao, ôn thêm một lượt nữa sẽ tốt hơn! 🌱"],
    click: [
      "Nghé ọ! 🐃",
      "Gọi trâu hả? Cố lên nhé!",
      "Mình đang cổ vũ bạn đây! 📣",
    ],
  };
  const mascot = (() => {
    let t = null,
      last = 0,
      t0 = Date.now(),
      lastWater = Date.now(),
      lastRest = Date.now(),
      hidden = false;
    const el = () => $("#mascot"),
      bub = () => $("#mBubble");
    try {
      hidden = localStorage.getItem("it_mascot_hidden") === "1";
    } catch (e) {}
    function apply() {
      const m = el(),
        s = $("#mShow");
      if (!m) return;
      m.style.display = hidden ? "none" : "block";
      s.style.display = hidden ? "grid" : "none";
    }
    function say(cat, v, force) {
      if (hidden || !el()) return;
      const now = Date.now();
      if (!force && now - last < 2500) return;
      last = now;
      const a = MSG[cat] || MSG.idle;
      let m = a[(Math.random() * a.length) | 0];
      Object.keys(v || {}).forEach((k) => (m = m.replace("{" + k + "}", v[k])));
      const b = bub();
      b.textContent = m;
      b.classList.add("show");
      const body = $("#mBody");
      body.classList.add("cheer");
      setTimeout(() => body.classList.remove("cheer"), 1300);
      clearTimeout(t);
      t = setTimeout(
        () => b.classList.remove("show"),
        cat === "water" || cat === "rest" ? 7000 : 5200,
      );
    }
    function tick() {
      const now = Date.now();
      if (hidden) return;
      if (now - lastWater > 11 * 60000) {
        lastWater = now;
        say("water", {}, true);
        return;
      }
      if (now - lastRest > 27 * 60000) {
        lastRest = now;
        say("rest", {}, true);
        return;
      }
      if (now - last > 55000) say("idle");
    }
    function start() {
      const m = el();
      if (!m) return;
      apply();
      $("#mHide").onclick = (e) => {
        e.stopPropagation();
        hidden = true;
        try {
          localStorage.setItem("it_mascot_hidden", "1");
        } catch (x) {}
        apply();
      };
      $("#mShow").onclick = () => {
        hidden = false;
        try {
          localStorage.setItem("it_mascot_hidden", "0");
        } catch (x) {}
        apply();
        say("hello", {}, true);
      };
      $("#mBody").onclick = () => say("click", {}, true);
      setTimeout(() => say("hello", {}, true), 1400);
      setInterval(tick, 15000);
    }
    return { say, start };
  })();
  function hud() {
    const h = $("#hud");
    if (!h) return;
    let ok = 0;
    Object.keys(S.res).forEach((k) => {
      if (S.res[k].ok) ok++;
    });
    h.innerHTML = `<span class="hp" title="Tổng số câu đúng">⭐ ${ok}</span>${STREAK >= 2 ? `<span class="hp fire" title="Chuỗi đúng liên tiếp">🔥 ${STREAK}</span>` : ""}`;
  }
  function react(ok, n) {
    const before = STREAK;
    if (ok) {
      STREAK += n || 1;
    } else STREAK = 0;
    hud();
    if (ok) {
      if (Math.floor(STREAK / 5) > Math.floor(before / 5)) {
        mascot.say("streak", { n: STREAK }, true);
        confetti(70);
      } else if (Math.random() < 0.45) mascot.say("correct");
    } else mascot.say("wrong");
  }
  function confetti(n) {
    if (
      window.matchMedia &&
      matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const c = $("#cf");
    if (!c || !c.getContext) return;
    let x = null;
    try {
      x = c.getContext("2d");
    } catch (e) {}
    if (!x) return;
    c.width = innerWidth;
    c.height = innerHeight;
    const cols = [
      "#14b8a6",
      "#4f46e5",
      "#f59e0b",
      "#ef4444",
      "#ec4899",
      "#22c55e",
      "#0ea5e9",
    ];
    const ps = Array.from({ length: n || 140 }, () => ({
      x: innerWidth / 2 + (Math.random() - 0.5) * 240,
      y: innerHeight * 0.55,
      vx: (Math.random() - 0.5) * 15,
      vy: -Math.random() * 15 - 6,
      s: Math.random() * 8 + 5,
      c: cols[(Math.random() * cols.length) | 0],
      r: Math.random() * 6,
      vr: (Math.random() - 0.5) * 0.4,
    }));
    let f = 0;
    (function step() {
      x.clearRect(0, 0, c.width, c.height);
      ps.forEach((p) => {
        p.vy += 0.36;
        p.vx *= 0.992;
        p.x += p.vx;
        p.y += p.vy;
        p.r += p.vr;
        x.save();
        x.translate(p.x, p.y);
        x.rotate(p.r);
        x.fillStyle = p.c;
        x.fillRect(-p.s / 2, -p.s / 3, p.s, p.s * 0.6);
        x.restore();
      });
      if (++f < 140) requestAnimationFrame(step);
      else x.clearRect(0, 0, c.width, c.height);
    })();
  }

  /* ---------- state ---------- */
  const S = {
    view: "units",
    u: null,
    sec: null,
    ex: 0,
    order: [],
    pos: 0,
    res: {},
    draft: null,
    bd: {},
    flip: false,
  };
  let BEST = {};
  try {
    BEST = JSON.parse(localStorage.getItem("it_best") || "{}");
  } catch (e) {}
  function saveBest() {
    try {
      localStorage.setItem("it_best", JSON.stringify(BEST));
    } catch (e) {}
  }
  const key = (i) => `${S.u}|${S.sec}|${S.ex}|${i}`;
  const exs = () => U[S.u].sec[S.sec];
  const curEx = () => exs()[S.ex];
  function shuffled(n) {
    const a = [...Array(n).keys()];
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function exStats(u, sec, ei) {
    const ex = U[u].sec[sec][ei];
    let ok = 0,
      done = 0;
    ex.items.forEach((q, i) => {
      const r = S.res[`${u}|${sec}|${ei}|${i}`];
      if (r) {
        done++;
        if (r.ok) ok++;
      }
    });
    return { ok, done, total: ex.items.length };
  }
  function secStats(u, sec) {
    let ok = 0,
      done = 0,
      total = 0;
    U[u].sec[sec].forEach((e, ei) => {
      const s = exStats(u, sec, ei);
      ok += s.ok;
      done += s.done;
      total += s.total;
    });
    return { ok, done, total };
  }
  function countQ(u, sec) {
    return U[u].sec[sec].reduce((a, e) => a + e.items.length, 0);
  }

  /* ---------- views ---------- */
  function crumbs() {
    const c = $("#crumbs");
    let t = "";
    if (S.u) t += `Unit ${S.u}: ${U[S.u].name}`;
    if (S.sec) t += ` › ${SEC[S.sec].vi}`;
    c.textContent = t;
  }
  function go(v) {
    S.view = v;
    if (v === "study") S.flip = false;
    crumbs();
    window.scrollTo(0, 0);
    render();
  }
  $("#home").onclick = () => {
    S.u = null;
    S.sec = null;
    go("units");
  };

  function render() {
    ({ units: vUnits, secs: vSecs, study: vStudy, summary: vSummary })[
      S.view
    ]();
  }

  function vUnits() {
    let h = `<h2 class="h2">Chọn Unit để ôn tập</h2><p class="sub">8 unit · mỗi unit có 4 phần: Word Bank (từ vựng), Vocabulary, Language Spot, Reading. Di chuột lên từ tiếng Anh để xem nghĩa, bấm vào để nghe phát âm.</p><div class="grid">`;
    Object.keys(U).forEach((n) => {
      let tot = 0,
        ok = 0,
        done = 0;
      ["bank", "vocab", "lang", "read"].forEach((s) => {
        const x = secStats(n, s);
        tot += x.total;
        ok += x.ok;
        done += x.done;
      });
      h += `<button class="ucard" data-u="${n}" style="--h:${[172, 262, 350, 28, 200, 320, 190, 45][n - 1]}"><span class="n">UNIT ${n}</span><span class="ic">${U[n].icon}</span><span class="en">${esc(U[n].name)}</span><span class="vi">${esc(U[n].vi)}</span>
    <div class="bar"><i style="width:${tot ? Math.round((done / tot) * 100) : 0}%"></i></div><span class="small">${tot} câu · đã làm ${done} · đúng ${ok}</span></button>`;
    });
    $("#app").innerHTML = h + "</div>";
    document.querySelectorAll("[data-u]").forEach(
      (b) =>
        (b.onclick = () => {
          S.u = +b.dataset.u;
          S.sec = null;
          go("secs");
        }),
    );
  }
  function vSecs() {
    let h = `<button class="back" id="bk">← Chọn unit khác</button><h2 class="h2">Unit ${S.u} · ${esc(U[S.u].name)}</h2><p class="sub">${esc(U[S.u].vi)} — chọn phần muốn ôn tập.</p><div class="secgrid">`;
    ["bank", "vocab", "lang", "read"].forEach((s) => {
      const st = secStats(S.u, s);
      h += `<button class="scard" data-s="${s}"><span class="ic">${SEC[s].ic}</span><h3>${SEC[s].n}</h3><div class="small" style="margin-bottom:8px">${SEC[s].vi}</div>
    <span class="pill">${U[S.u].sec[s].length} bài tập · ${st.total} câu</span><div class="bar"><i style="width:${st.total ? Math.round((st.done / st.total) * 100) : 0}%"></i></div><div class="small" style="margin-top:4px">Đúng ${st.ok}/${st.total}</div></button>`;
    });
    $("#app").innerHTML = h + "</div>";
    $("#bk").onclick = () => {
      S.u = null;
      go("units");
    };
    document.querySelectorAll("[data-s]").forEach(
      (b) =>
        (b.onclick = () => {
          S.sec = b.dataset.s;
          startEx(0);
        }),
    );
  }
  function startEx(i, subset) {
    S.ex = i;
    const n = curEx().items.length;
    S.order = subset || [...Array(n).keys()];
    S.pos = 0;
    S.draft = null;
    go("study");
  }

  /* ---------- checking ---------- */
  const norm = (s) =>
    String(s)
      .toLowerCase()
      .replace(/[’'`]/g, "")
      .replace(/[–—\-]/g, " ")
      .replace(/[.,;!?]+$/, "")
      .replace(/\s+/g, " ")
      .trim();
  const nospace = (s) => norm(s).replace(/\s/g, "");
  const accepts = (a) => (Array.isArray(a) ? a : [a]);
  function permOf(q) {
    if (!q._p) {
      q._p = q.fixed ? [...q.opts.keys()] : shuffled(q.opts.length);
    }
    return q._p;
  }

  function ansText(q) {
    if (q.k === "card") return q.vi;
    if (q.k === "mc") return q.ans.map((i) => q.opts[i]).join("  /  ");
    if (q.k === "ms") return q.ans.map((i) => q.opts[i]).join(" + ");
    return q.ans.map((a) => accepts(a)[0]).join("  |  ");
  }

  /* ---------- study view ---------- */
  function vStudy() {
    if (curEx().isMatch) return vMatch();
    if (curEx().isList) return vList();
    if (curEx().isCards) return vCards();
    const ex = curEx(),
      i = S.order[S.pos],
      q = ex.items[i],
      r = S.res[key(i)];
    const stats = exStats(S.u, S.sec, S.ex);
    let h = `<button class="back" id="bk">← Chọn phần khác</button><div class="tabs">`;
    exs().forEach((e, ei) => {
      const s = exStats(S.u, S.sec, ei);
      h += `<button class="tab ${ei === S.ex ? "on" : ""}" data-e="${ei}">Bài ${ei + 1}${s.done ? `<span class="sc">${s.ok}/${s.total}</span>` : ""}</button>`;
    });
    h += `</div><div class="cols"><section class="pane" id="L"><h4>${esc(ex.t)}</h4>`;
    if (ex.ins)
      h += `<div class="ins">${words(ex.ins)}${ex.insvi ? `<div class="small" style="margin-top:3px">${esc(ex.insvi)}</div>` : ""}</div>`;
    if (ex.noctx)
      h += `<div class="note">ℹ️ Bài đọc gốc không có trong file đáp án – phần giải thích dựa trên đáp án + kiến thức của unit. Hãy đối chiếu thêm với giáo trình.</div>`;
    if (ex.ctx) {
      h += `<div class="ctx">`;
      ex.ctx.split("\n").forEach((p, pi) => {
        h += `<p>${words(p)}<button class="tr" data-tr="${pi}" title="Dịch đoạn này sang tiếng Việt">🌐 dịch</button></p><div class="trout" data-o="${pi}" hidden></div>`;
      });
      h += `</div>`;
    }
    if (ex.wb)
      h += `<div class="wb">${ex.wb.map((w) => `<span>${esc(w)}</span>`).join("")}</div>`;
    h += `<div class="qno"><span class="tag">Câu ${i + 1}/${ex.items.length}</span><span class="small">${q.k === "mc" && q.tf ? "True / False" : q.k === "mc" ? (q.match ? "Nối (Match)" : "Chọn đáp án") : q.k === "ms" ? "Chọn tất cả đáp án đúng" : "Điền vào chỗ trống"}</span></div>`;
    h +=
      qHtml(q, r) +
      `<div class="tools"><button id="trq">🌐 Dịch câu</button><button id="spq">🔊 Đọc câu</button></div><div class="trout" id="trqo" hidden style="margin-top:10px"></div></section>`;
    h += `<aside class="pane" id="R"></aside></div>`;
    h += `<div class="navbar"><div class="navin"><button class="btn ghost" id="bBack">← Back</button><div class="mid">Câu ${S.pos + 1}/${S.order.length} · Bài ${S.ex + 1}/${exs().length}<div class="dots">${S.order
      .map((ii, p) => {
        const rr = S.res[key(ii)];
        return `<i class="${rr ? (rr.ok ? "ok" : "bad") : ""} ${p === S.pos ? "cur" : ""}"></i>`;
      })
      .join(
        "",
      )}</div></div><button class="btn" id="bNext">${S.pos === S.order.length - 1 ? "Xem kết quả →" : "Next →"}</button></div></div>`;
    $("#app").innerHTML = h;
    renderExplain(q, r);
    wireStudy(ex, i, q);
  }
  function qHtml(q, r) {
    if (q.k === "mc") {
      const p = permOf(q);
      let h = `<div class="qtext">${words(q.q)}</div><div class="opts">`;
      p.forEach((oi, pos) => {
        let c = "opt";
        if (r) {
          if (q.ans.includes(oi)) c += " ok";
          else if (r.given === oi) c += " bad";
        }
        h += `<button class="${c}" data-o="${oi}" ${r ? "disabled" : ""}><span class="l">${LET[pos]}</span><span>${words(q.opts[oi])}</span></button>`;
      });
      return h + "</div>";
    }
    if (q.k === "ms") {
      const d = S.draft && S.draft.k === q ? S.draft.sel : [];
      let h = `<div class="qtext">${words(q.q)}</div><div class="opts">`;
      q.opts.forEach((o, oi) => {
        let c = "opt";
        if (r) {
          if (q.ans.includes(oi)) c += " ok";
          else if (r.given.includes(oi)) c += " bad";
        } else if (d.includes(oi)) c += " sel";
        h += `<button class="${c}" data-m="${oi}" ${r ? "disabled" : ""}><span class="l">${r ? (q.ans.includes(oi) ? "✓" : r.given.includes(oi) ? "✗" : "") : d.includes(oi) ? "✓" : ""}</span><span>${words(o)}</span></button>`;
      });
      return (
        h +
        `</div>${r ? "" : '<div class="row"><button class="btn" id="chk">Kiểm tra</button></div>'}`
      );
    }
    // fill
    const parts = q.q.split("___");
    let h = '<div class="qtext">';
    parts.forEach((pt, bi) => {
      h += words(pt);
      if (bi < parts.length - 1) {
        const a = accepts(q.ans[bi])[0];
        const v = r ? r.given[bi] : "";
        const good = r ? r.flags[bi] : null;
        h += `<input class="fin ${r ? (good ? "ok" : "bad") : ""}" data-b="${bi}" size="${Math.max(6, Math.min(26, a.length + 2))}" value="${esc(v)}" ${r ? "disabled" : ""} autocomplete="off" autocapitalize="off" spellcheck="false">`;
      }
    });
    return (
      h +
      `</div>${r ? "" : '<div class="row"><button class="btn" id="chk">Kiểm tra</button><span class="small">Nhấn Enter để kiểm tra</span></div>'}`
    );
  }
  function record(q, i, given, ok, flags) {
    S.res[key(i)] = { given, ok, flags };
    react(ok, 1);
    const s = exStats(S.u, S.sec, S.ex);
    const k = `${S.u}|${S.sec}|${S.ex}`;
    const pct = Math.round((s.ok / s.total) * 100);
    if (s.done === s.total && (BEST[k] == null || pct > BEST[k])) {
      BEST[k] = pct;
      saveBest();
    }
    vStudyKeepScroll();
  }
  function vStudyKeepScroll() {
    const y = window.scrollY;
    vStudy();
    window.scrollTo(0, y);
  }
  function wireStudy(ex, i, q) {
    $("#bk").onclick = () => {
      S.sec = null;
      go("secs");
    };
    document
      .querySelectorAll("[data-e]")
      .forEach((b) => (b.onclick = () => startEx(+b.dataset.e)));
    $("#bNext").onclick = () => {
      if (S.pos < S.order.length - 1) {
        S.pos++;
        S.draft = null;
        vStudy();
        window.scrollTo(0, 0);
      } else go("summary");
    };
    $("#bBack").onclick = () => {
      if (S.pos > 0) {
        S.pos--;
        S.draft = null;
        vStudy();
        window.scrollTo(0, 0);
      } else if (S.ex > 0) {
        S.ex--;
        S.order = [...Array(curEx().items.length).keys()];
        S.pos = S.order.length - 1;
        S.draft = null;
        vStudy();
        window.scrollTo(0, 0);
      } else toast("Đây là câu đầu tiên");
    };
    document.querySelectorAll("[data-tr]").forEach(
      (b) =>
        (b.onclick = async () => {
          const pi = +b.dataset.tr,
            o = document.querySelector(`[data-o="${pi}"]`);
          const pr = ex.ctx.split("\n")[pi];
          o.hidden = false;
          o.textContent = "Đang dịch…";
          const t = await trLong(pr);
          o.textContent = t || "Không dịch được (cần Internet).";
        }),
    );
    $("#spq").onclick = () => speak(q.q.replace(/___/g, "blank"));
    $("#trq").onclick = async () => {
      const o = $("#trqo");
      o.hidden = false;
      o.textContent = "Đang dịch…";
      const t = await trLong(q.q.replace(/___/g, "…"));
      o.textContent = t || "Không dịch được (cần Internet).";
    };
    if (q.k === "mc" && !S.res[key(i)])
      document.querySelectorAll(".opt").forEach(
        (b) =>
          (b.onclick = () => {
            const oi = +b.dataset.o;
            record(q, i, oi, q.ans.includes(oi));
          }),
      );
    if (q.k === "ms" && !S.res[key(i)]) {
      document.querySelectorAll("[data-m]").forEach(
        (b) =>
          (b.onclick = () => {
            const oi = +b.dataset.m;
            S.draft = S.draft && S.draft.k === q ? S.draft : { k: q, sel: [] };
            const s = S.draft.sel;
            const x = s.indexOf(oi);
            x >= 0 ? s.splice(x, 1) : s.push(oi);
            vStudyKeepScroll();
          }),
      );
      $("#chk").onclick = () => {
        const sel = (S.draft && S.draft.k === q ? S.draft.sel : [])
          .slice()
          .sort();
        if (!sel.length) return toast("Hãy chọn ít nhất một đáp án");
        const a = q.ans.slice().sort();
        record(q, i, sel, JSON.stringify(sel) === JSON.stringify(a));
      };
    }
    if (q.k === "fl" && !S.res[key(i)]) {
      const ins = [...document.querySelectorAll(".fin")];
      ins[0] && ins[0].focus();
      const chk = () => {
        const vals = ins.map((x) => x.value.trim());
        if (vals.some((v) => !v)) return toast("Hãy điền hết các ô trống");
        const flags = vals.map((v, bi) =>
          accepts(q.ans[bi]).some(
            (a) => norm(a) === norm(v) || nospace(a) === nospace(v),
          ),
        );
        record(q, i, vals, flags.every(Boolean), flags);
      };
      $("#chk").onclick = chk;
      ins.forEach((x) =>
        x.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            chk();
          }
        }),
      );
    }
  }
  async function trLong(t) {
    const chunks = [];
    let cur = "";
    t.split(/(?<=[.!?])\s+/).forEach((s) => {
      if ((cur + " " + s).length > 430) {
        chunks.push(cur);
        cur = s;
      } else cur = (cur ? cur + " " : "") + s;
    });
    if (cur) chunks.push(cur);
    const out = [];
    for (const c of chunks) {
      const x = await apiTr(c);
      if (!x) return null;
      out.push(x);
    }
    return out.join(" ");
  }

  /* ---------- WORD BANK VIEWS ---------- */
  function tabsHtml() {
    return (
      '<div class="tabs">' +
      exs()
        .map((x, ei) => {
          const s = exStats(S.u, S.sec, ei);
          return `<button class="tab ${ei === S.ex ? "on" : ""}" data-e="${ei}">${esc(x.isList ? "📋 Danh sách" : x.isCards ? "🃏 Thẻ nhớ" : x.t.replace(/^Bài (\d+).*/, "Bài $1"))}${s.done ? `<span class="sc">${s.ok}/${s.total}</span>` : ""}</button>`;
        })
        .join("") +
      "</div>"
    );
  }
  function navHtml(mid, nextLabel) {
    return `<div class="navbar"><div class="navin"><button class="btn ghost" id="bBack">← Back</button><div class="mid">${mid}</div><button class="btn" id="bNext">${nextLabel}</button></div></div>`;
  }
  function wireTabs() {
    $("#bk").onclick = () => {
      S.sec = null;
      go("secs");
    };
    document
      .querySelectorAll("[data-e]")
      .forEach((b) => (b.onclick = () => startEx(+b.dataset.e)));
  }
  function backPrev() {
    if (S.ex > 0) {
      S.ex--;
      S.order = [...Array(curEx().items.length).keys()];
      S.pos = S.order.length - 1;
      S.draft = null;
      S.flip = false;
      go("study");
    } else toast("Đây là bài đầu tiên");
  }
  function vList() {
    const ex = curEx(),
      W = ex.words;
    let h =
      `<button class="back" id="bk">← Chọn phần khác</button>${tabsHtml()}<section class="pane"><h4>${esc(ex.t)} · ${W.length} từ</h4><div class="ins">${esc(ex.ins)}</div>
  <div class="row" style="margin:0 0 12px"><input id="wq" class="wsearch" placeholder="🔎 Lọc từ…" autocomplete="off"><label class="chk"><input type="checkbox" id="hide"> Che nghĩa tiếng Việt</label><span class="small" id="wc"></span></div>
  <div class="wgrid" id="wgrid">${W.map((w) => `<div class="wrow" data-en="${esc(w.en.toLowerCase())}" data-vi="${esc(w.vi.toLowerCase())}" data-sp="${esc(w.en.replace(/\(.*?\)/g, "").replace(/^-|-$/g, ""))}"><span class="wsp">🔊</span><span class="wen">${esc(w.en)}</span><span class="wvi">${esc(w.vi)}</span></div>`).join("")}</div></section>` +
      navHtml(
        `${W.length} từ`,
        S.ex === exs().length - 1 ? "Xem kết quả →" : "Học thẻ nhớ →",
      );
    $("#app").innerHTML = h;
    wireTabs();
    const g = $("#wgrid");
    const filt = () => {
      const q = $("#wq").value.trim().toLowerCase();
      let c = 0;
      g.querySelectorAll(".wrow").forEach((r) => {
        const ok = !q || r.dataset.en.includes(q) || r.dataset.vi.includes(q);
        r.style.display = ok ? "" : "none";
        if (ok) c++;
      });
      $("#wc").textContent = c + "/" + W.length;
    };
    $("#wq").oninput = filt;
    filt();
    $("#hide").onchange = (e) => g.classList.toggle("hidevi", e.target.checked);
    g.onclick = (e) => {
      const r = e.target.closest(".wrow");
      if (!r) return;
      speak(r.dataset.sp);
      r.classList.toggle("show");
    };
    $("#bNext").onclick = () => {
      if (S.ex < exs().length - 1) startEx(S.ex + 1);
      else go("summary");
    };
    $("#bBack").onclick = () => {
      if (S.ex > 0) startEx(S.ex - 1);
      else {
        S.sec = null;
        go("secs");
      }
    };
  }
  function vCards() {
    const ex = curEx(),
      i = S.order[S.pos],
      q = ex.items[i],
      r = S.res[key(i)];
    const st = exStats(S.u, S.sec, S.ex),
      flip = S.flip || !!r;
    let h =
      `<button class="back" id="bk">← Chọn phần khác</button>${tabsHtml()}<div class="cols"><section class="pane" id="L"><h4>${esc(ex.t)}</h4><div class="ins">${esc(ex.ins)}</div>
  <div class="qno"><span class="tag">Thẻ ${S.pos + 1}/${S.order.length}</span><span class="small">Đã thuộc ${st.ok} · chưa thuộc ${st.done - st.ok}</span></div>
  <div class="fcwrap"><div class="fc ${flip ? "flip" : ""}" id="fc"><div class="face front"><div class="fw">${esc(q.en)}</div><div class="fh">Bấm vào thẻ để lật 👆</div></div><div class="face back"><div class="fw vi">${esc(q.vi)}</div><div class="fh">${esc(q.en)}</div></div></div></div>
  <div class="row" style="justify-content:center"><button class="btn ghost" id="fsp">🔊 Nghe</button><button class="btn ghost" id="kno" ${r ? "disabled" : ""}>😵 Chưa thuộc</button><button class="btn" id="kyes" ${r ? "disabled" : ""}>😎 Đã thuộc</button></div></section><aside class="pane" id="R"></aside></div>` +
      navHtml(
        `Thẻ ${S.pos + 1}/${S.order.length}`,
        S.pos === S.order.length - 1 ? "Xem kết quả →" : "Next →",
      );
    $("#app").innerHTML = h;
    wireTabs();
    let e2 = `<div class="live"><span>Thẻ ghi nhớ</span><span><b>${st.ok}</b>/${st.total} đã thuộc</span></div>`;
    if (!flip)
      e2 += `<div class="empty"><div class="big">🃏</div>Đoán nghĩa của từ <b>${esc(q.en)}</b>,<br>rồi lật thẻ để kiểm tra.</div>`;
    else {
      e2 += `<div class="verdict ${r ? (r.ok ? "ok" : "bad") : "ok"}" style="${r ? "" : "background:var(--accSoft);color:var(--acc)"}">${r ? (r.ok ? "😎 Đã thuộc!" : "😵 Cần ôn lại") : "📖 Nghĩa của từ"}</div>
    <div class="blk right"><b class="t">${esc(q.en)}</b>${esc(q.vi)}</div>${q.tip ? `<div class="blk tip"><b class="t">💡 Mẹo ghi nhớ</b>${esc(q.tip)}</div>` : ""}`;
    }
    $("#R").innerHTML = e2;
    const fc = $("#fc");
    fc.onclick = () => {
      if (r) return;
      S.flip = !S.flip;
      fc.classList.toggle("flip", S.flip);
      if (S.flip) speak(q.en);
      setTimeout(vCards, 380);
    };
    $("#fsp").onclick = () =>
      speak(q.en.replace(/\(.*?\)/g, "").replace(/^-|-$/g, ""));
    const mark = (ok) => {
      if (S.res[key(i)]) return;
      S.res[key(i)] = { given: ok ? "know" : "no", ok, flags: null };
      react(ok, 1);
      S.flip = true;
      vCards();
      setTimeout(() => {
        if (S.view !== "study" || curEx() !== ex) return;
        if (S.pos < S.order.length - 1) {
          S.pos++;
          S.flip = false;
          vCards();
          window.scrollTo(0, 0);
        } else go("summary");
      }, 650);
    };
    if (!r) {
      $("#kyes").onclick = () => mark(true);
      $("#kno").onclick = () => mark(false);
    }
    $("#bNext").onclick = () => {
      if (S.pos < S.order.length - 1) {
        S.pos++;
        S.flip = false;
        vCards();
        window.scrollTo(0, 0);
      } else go("summary");
    };
    $("#bBack").onclick = () => {
      if (S.pos > 0) {
        S.pos--;
        S.flip = false;
        vCards();
        window.scrollTo(0, 0);
      } else backPrev();
    };
  }

  /* ---------- MATCH BOARD (2 cột) ---------- */
  const pc = (i) => `hsl(${(i * 47 + 170) % 360} 62% 42%)`;
  function vMatch() {
    const ex = curEx(),
      n = ex.items.length,
      ek = `${S.u}|${S.sec}|${S.ex}`;
    const bd = S.bd[ek] || (S.bd[ek] = { map: {}, sel: null });
    ex.items.forEach((q, i) => {
      const r = S.res[key(i)];
      if (r) bd.map[i] = r.given;
    });
    const B = ex.items[0].opts;
    const P =
      ex._p || (ex._p = ex.items[0].fixed ? [...B.keys()] : shuffled(B.length));
    const R = (i) => S.res[key(i)];
    const locked = (i) => R(i) && R(i).ok,
      done = (i) => !!R(i);
    const owner = {};
    Object.keys(bd.map).forEach((i) => (owner[bd.map[i]] = +i));
    const posOf = {};
    P.forEach((oi, p) => (posOf[oi] = p));
    const st = exStats(S.u, S.sec, S.ex);
    const checked = st.done === n;
    const paired = Object.keys(bd.map).length;
    let h = `<button class="back" id="bk">← Chọn phần khác</button><div class="tabs">`;
    exs().forEach((x, ei) => {
      const s = exStats(S.u, S.sec, ei);
      h += `<button class="tab ${ei === S.ex ? "on" : ""}" data-e="${ei}">Bài ${ei + 1}${s.done ? `<span class="sc">${s.ok}/${s.total}</span>` : ""}</button>`;
    });
    h += `</div><div class="cols"><section class="pane" id="L"><h4>${esc(ex.t)}</h4>`;
    if (ex.ins) h += `<div class="ins">${words(ex.ins)}</div>`;
    if (ex.noctx)
      h += `<div class="note">ℹ️ Bài đọc gốc không có trong file đáp án – phần giải thích dựa trên đáp án + kiến thức của unit.</div>`;
    if (ex.ctx) {
      h += `<div class="ctx">`;
      ex.ctx.split("\n").forEach((p, pi) => {
        h += `<p>${words(p)}<button class="tr" data-tr="${pi}">🌐 dịch</button></p><div class="trout" data-o="${pi}" hidden></div>`;
      });
      h += `</div>`;
    }
    h += `<div class="small" style="margin-bottom:8px">👉 Bấm 1 ô ở <b>cột A</b>, rồi bấm 1 ô ở <b>cột B</b> để nối. Bấm lại ô đã nối để nối lại. Đã nối <b>${paired}/${n}</b>.</div>`;
    h += `<div class="board" id="board"><svg id="ln"></svg><div class="bcol"><div class="bhead">Cột A</div>`;
    ex.items.forEach((q, i) => {
      const r = R(i);
      let c = "bi";
      let st2 = "";
      let pt = "";
      if (r) c += r.ok ? " ok" : " bad";
      else if (bd.sel === i) c += " sel";
      else if (bd.map[i] != null) {
        c += " pair";
        st2 = `style="--c:${pc(i)}"`;
        pt = `<span class="pt">${LET[posOf[bd.map[i]]]}</span>`;
      }
      if (bd.map[i] != null && r)
        pt = `<span class="pt" style="background:${r.ok ? "var(--ok)" : "var(--bad)"}">${LET[posOf[bd.map[i]]]}</span>`;
      h += `<button class="${c}" ${st2} data-l="${i}" ${locked(i) || done(i) ? "disabled" : ""}><span class="l">${i + 1}</span><span>${words(q.q)}</span>${pt}</button>`;
    });
    h += `</div><div class="bcol"><div class="bhead">Cột B</div>`;
    P.forEach((oi, p) => {
      const ow = owner[oi];
      let c = "bi",
        st2 = "",
        pt = "";
      if (ow != null) {
        const r = R(ow);
        if (r) c += r.ok ? " ok" : " bad";
        else {
          c += " pair";
          st2 = `style="--c:${pc(ow)}"`;
        }
        pt = `<span class="pt" style="${r ? `background:${r.ok ? "var(--ok)" : "var(--bad)"}` : ""}">${ow + 1}</span>`;
      }
      h += `<button class="${c}" ${st2} data-r="${oi}" ${ow != null && done(ow) ? "disabled" : ""}><span class="l">${LET[p]}</span><span>${words(B[oi])}</span>${pt}</button>`;
    });
    h += `</div></div><div class="row"><button class="btn" id="chk" ${checked ? "disabled" : ""}>Kiểm tra</button><button class="btn ghost" id="rst" ${checked ? "disabled" : ""}>Xóa các nối chưa chấm</button>${st.done && st.ok < n ? '<button class="btn ghost" id="rdo">🔁 Nối lại các câu sai</button>' : ""}</div></section><aside class="pane" id="R"></aside></div>`;
    h += `<div class="navbar"><div class="navin"><button class="btn ghost" id="bBack">← Back</button><div class="mid">Bài ${S.ex + 1}/${exs().length} · đã nối ${paired}/${n}</div><button class="btn" id="bNext">${S.ex === exs().length - 1 ? "Xem kết quả →" : "Next →"}</button></div></div>`;
    $("#app").innerHTML = h;
    explainMatch(ex, checked, paired, P, posOf);
    const draw = () => {
      const bo = $("#board");
      if (!bo) return;
      const svg = $("#ln"),
        br = bo.getBoundingClientRect();
      let s = "";
      Object.keys(bd.map).forEach((i) => {
        const a = bo.querySelector(`[data-l="${i}"]`),
          b = bo.querySelector(`[data-r="${bd.map[i]}"]`);
        if (!a || !b) return;
        const ra = a.getBoundingClientRect(),
          rb = b.getBoundingClientRect();
        const x1 = ra.right - br.left,
          y1 = ra.top + ra.height / 2 - br.top,
          x2 = rb.left - br.left,
          y2 = rb.top + rb.height / 2 - br.top,
          mx = (x1 + x2) / 2;
        const r = R(+i);
        const col = r ? (r.ok ? "var(--ok)" : "var(--bad)") : pc(+i);
        s += `<path d="M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}" fill="none" stroke="${col}" stroke-width="3" stroke-linecap="round"/><circle cx="${x1}" cy="${y1}" r="4" fill="${col}"/><circle cx="${x2}" cy="${y2}" r="4" fill="${col}"/>`;
      });
      svg.innerHTML = s;
    };
    window.__draw = draw;
    requestAnimationFrame(draw);
    setTimeout(draw, 60);
    const again = () => {
      const y = window.scrollY;
      vMatch();
      window.scrollTo(0, y);
    };
    document.querySelectorAll("[data-l]").forEach(
      (b) =>
        (b.onclick = () => {
          const i = +b.dataset.l;
          if (done(i)) return;
          if (bd.map[i] != null) delete bd.map[i];
          bd.sel = i;
          again();
        }),
    );
    document.querySelectorAll("[data-r]").forEach(
      (b) =>
        (b.onclick = () => {
          const oi = +b.dataset.r;
          const ow = owner[oi];
          if (ow != null && done(ow)) return;
          if (bd.sel == null) {
            if (ow != null) {
              delete bd.map[ow];
              bd.sel = ow;
              again();
            } else toast("Hãy chọn một ô ở cột A trước");
            return;
          }
          if (ow != null) delete bd.map[ow];
          bd.map[bd.sel] = oi;
          const next = ex.items.findIndex(
            (q, i) => !done(i) && bd.map[i] == null,
          );
          bd.sel = next >= 0 ? next : null;
          again();
        }),
    );
    $("#bk").onclick = () => {
      S.sec = null;
      go("secs");
    };
    document
      .querySelectorAll("[data-e]")
      .forEach((b) => (b.onclick = () => startEx(+b.dataset.e)));
    document.querySelectorAll("[data-tr]").forEach(
      (b) =>
        (b.onclick = async () => {
          const pi = +b.dataset.tr,
            o = document.querySelector(`[data-o="${pi}"]`);
          o.hidden = false;
          o.textContent = "Đang dịch…";
          const t = await trLong(ex.ctx.split("\n")[pi]);
          o.textContent = t || "Không dịch được (cần Internet).";
        }),
    );
    $("#rst").onclick = () => {
      Object.keys(bd.map).forEach((i) => {
        if (!done(+i)) delete bd.map[i];
      });
      bd.sel = null;
      again();
    };
    if ($("#rdo"))
      $("#rdo").onclick = () => {
        ex.items.forEach((q, i) => {
          if (!locked(i)) delete S.res[key(i)];
        });
        delete S.bd[ek];
        ex._p = null;
        vMatch();
      };
    $("#chk").onclick = () => {
      const todo = ex.items.map((q, i) => i).filter((i) => !done(i));
      if (todo.some((i) => bd.map[i] == null))
        return toast("Hãy nối hết các ô ở cột A trước khi kiểm tra");
      todo.forEach((i) => {
        const q = ex.items[i],
          g = bd.map[i];
        S.res[key(i)] = { given: g, ok: q.ans.includes(g), flags: null };
      });
      react(
        todo.every((i) => S.res[key(i)].ok),
        todo.length,
      );
      const s = exStats(S.u, S.sec, S.ex);
      const k = ek;
      const pct = Math.round((s.ok / s.total) * 100);
      if (BEST[k] == null || pct > BEST[k]) {
        BEST[k] = pct;
        saveBest();
      }
      window.scrollTo(0, 0);
      vMatch();
    };
    $("#bNext").onclick = () => go("summary");
    $("#bBack").onclick = () => {
      if (S.ex > 0) {
        S.ex--;
        S.order = [...Array(curEx().items.length).keys()];
        S.pos = S.order.length - 1;
        S.draft = null;
        go("study");
      } else toast("Đây là bài đầu tiên");
    };
    if (!window.__rs) {
      window.__rs = 1;
      addEventListener("resize", () => window.__draw && window.__draw());
    }
  }
  function explainMatch(ex, checked, paired, P, posOf) {
    const n = ex.items.length,
      st = exStats(S.u, S.sec, S.ex);
    let h = `<div class="live"><span>Điểm bài tập này</span><span><b>${st.ok}</b>/${n} đúng · ${st.done} đã chấm</span></div>`;
    if (!st.done) {
      h += `<div class="empty"><div class="big">🔗</div>Nối xong các cặp rồi bấm <b>Kiểm tra</b>.<br>Mỗi cặp sẽ hiện <b>đúng/sai, lý do và mẹo nhớ</b> tại đây.</div>`;
      $("#R").innerHTML = h;
      return;
    }
    h += `<div class="verdict ${st.ok === n ? "ok" : "bad"}">${st.ok === n ? "✅ TRUE — Nối đúng hết!" : `❌ FALSE — Đúng ${st.ok}/${n} cặp`}</div>`;
    const order = [...ex.items.keys()].sort(
      (a, b) =>
        (S.res[key(a)] && S.res[key(a)].ok ? 1 : 0) -
        (S.res[key(b)] && S.res[key(b)].ok ? 1 : 0),
    );
    order.forEach((i) => {
      const q = ex.items[i],
        r = S.res[key(i)];
      if (!r) return;
      h += `<div class="mitem ${r.ok ? "ok" : "bad"}"><div class="hd">${r.ok ? "✅" : "❌"} ${i + 1}. ${esc(q.q)}</div>`;
      if (!r.ok)
        h += `<div class="small">Bạn nối: <b>${LET[posOf[r.given]]}. ${esc(q.opts[r.given])}</b></div>`;
      h += `<div class="blk right"><b class="t">${r.ok ? "Đáp án" : "Câu đúng là"}</b>${esc(q.ans.map((a) => LET[posOf[a]] + ". " + q.opts[a]).join("  /  "))}</div>`;
      if (q.why)
        h += `<div class="blk why"><b class="t">Vì sao đúng</b>${md(q.why)}</div>`;
      if (!r.ok && Array.isArray(q.no) && q.no[r.given])
        h += `<div class="blk wrong"><b class="t">Vì sao đáp án bạn nối sai</b>${md(q.no[r.given])}</div>`;
      if (q.tip)
        h += `<div class="blk tip"><b class="t">💡 Mẹo ghi nhớ</b>${md(q.tip)}</div>`;
      h += `</div>`;
    });
    $("#R").innerHTML = h;
  }

  /* ---------- explanation ---------- */
  function renderExplain(q, r) {
    const st = exStats(S.u, S.sec, S.ex);
    let h = `<div class="live"><span>Điểm bài tập này</span><span><b>${st.ok}</b>/${st.total} đúng · ${st.done} đã làm</span></div>`;
    if (!r) {
      h += `<div class="empty"><div class="big">💡</div>Trả lời câu hỏi bên trái để xem<br><b>đúng/sai, lý do, mẹo nhớ</b> tại đây.</div>`;
      $("#R").innerHTML = h;
      return;
    }
    h += `<div class="verdict ${r.ok ? "ok" : "bad"}">${r.ok ? "✅ TRUE — Chính xác!" : "❌ FALSE — Chưa đúng"}</div>`;
    if (!r.ok) {
      let g = "";
      if (q.k === "mc") g = q.opts[r.given];
      else if (q.k === "ms") g = r.given.map((x) => q.opts[x]).join(" + ");
      else
        g = r.given
          .map((v, b) => `${v}${r.flags[b] ? " ✓" : " ✗"}`)
          .join(" | ");
      h += `<div class="small" style="margin-bottom:6px">Bạn trả lời: <b>${esc(g)}</b></div>`;
    }
    h += `<div class="blk right"><b class="t">${r.ok ? "Đáp án" : "Câu đúng là"}</b>${esc(ansText(q))}</div>`;
    if (q.why)
      h += `<div class="blk why"><b class="t">Vì sao đúng</b>${md(q.why)}</div>`;
    if (q.no) {
      let body = "";
      if (Array.isArray(q.no)) {
        body =
          "<ul>" +
          q.opts
            .map((o, oi) =>
              q.ans.includes(oi) || !q.no[oi]
                ? ""
                : `<li><b>${esc(o)}</b>: ${md(q.no[oi])}</li>`,
            )
            .join("") +
          "</ul>";
      } else body = md(q.no);
      h += `<div class="blk wrong"><b class="t">Các đáp án còn lại sai vì</b>${body}</div>`;
    }
    if (q.tip)
      h += `<div class="blk tip"><b class="t">💡 Mẹo ghi nhớ</b>${md(q.tip)}</div>`;
    $("#R").innerHTML = h;
  }

  /* ---------- summary ---------- */
  function vSummary() {
    const ex = curEx(),
      st = exStats(S.u, S.sec, S.ex),
      pct = st.total ? Math.round((st.ok / st.total) * 100) : 0;
    const wrong = [];
    ex.items.forEach((q, i) => {
      const r = S.res[key(i)];
      if (!r || !r.ok) wrong.push(i);
    });
    const last = S.ex === exs().length - 1;
    const msg =
      pct >= 90
        ? "Xuất sắc! 🎉"
        : pct >= 70
          ? "Khá tốt, cố thêm chút nữa! 👍"
          : pct >= 50
            ? "Tạm ổn – hãy làm lại các câu sai 💪"
            : "Cần ôn thêm – đọc kỹ phần giải thích nhé 📖";
    let h = `<button class="back" id="bk">← Chọn phần khác</button><div class="tabs">${exs()
      .map((e, ei) => {
        const s = exStats(S.u, S.sec, ei);
        return `<button class="tab ${ei === S.ex ? "on" : ""}" data-e="${ei}">Bài ${ei + 1}${s.done ? `<span class="sc">${s.ok}/${s.total}</span>` : ""}</button>`;
      })
      .join("")}</div>
  <section class="pane sum" style="max-width:720px;margin:0 auto"><h4>Kết quả · ${esc(ex.t)}</h4><div class="ring" style="--p:${pct}%"><div>${pct}%</div></div>
  <h3 style="margin:4px 0">Đúng ${st.ok}/${st.total} câu</h3><div class="small">${msg}${BEST[`${S.u}|${S.sec}|${S.ex}`] != null ? ` · Điểm cao nhất: ${BEST[`${S.u}|${S.sec}|${S.ex}`]}%` : ""}</div>
  <div class="rlist">${ex.items
    .map((q, i) => {
      const r = S.res[key(i)];
      return `<div class="ritem ${r ? (r.ok ? "ok" : "bad") : "na"}" data-j="${i}"><span class="m">${r ? (r.ok ? "✓" : "✗") : "–"}</span><span>${i + 1}. ${esc(q.q.replace(/___/g, "…").slice(0, 110))}${r && !r.ok ? `<br><span class="small">Đáp án: ${esc(ansText(q))}</span>` : ""}</span></div>`;
    })
    .join("")}</div>
  <div class="row" style="justify-content:center">
    <button class="btn" id="redo" ${wrong.length ? "" : "disabled"}>🔁 Làm lại ${wrong.length} câu sai</button>
    <button class="btn ghost" id="all">Làm lại cả bài</button>
    ${last ? `<button class="btn ghost" id="fin">Hoàn thành phần này ✔</button>` : `<button class="btn ghost" id="nx">Bài tiếp theo →</button>`}
  </div></section>`;
    $("#app").innerHTML = h;
    $("#bk").onclick = () => {
      S.sec = null;
      go("secs");
    };
    document
      .querySelectorAll("[data-e]")
      .forEach((b) => (b.onclick = () => startEx(+b.dataset.e)));
    document.querySelectorAll("[data-j]").forEach(
      (b) =>
        (b.onclick = () => {
          S.order = [...Array(ex.items.length).keys()];
          S.pos = +b.dataset.j;
          go("study");
        }),
    );
    $("#redo").onclick = () => {
      delete S.bd[`${S.u}|${S.sec}|${S.ex}`];
      wrong.forEach((i) => {
        delete S.res[key(i)];
        ex.items[i]._p = null;
      });
      startEx(S.ex, wrong);
    };
    $("#all").onclick = () => {
      delete S.bd[`${S.u}|${S.sec}|${S.ex}`];
      ex._p = null;
      ex.items.forEach((q, i) => {
        delete S.res[key(i)];
        q._p = null;
      });
      if (ex.gen) ex.items = ex.gen();
      startEx(S.ex);
    };
    if (last)
      $("#fin").onclick = () => {
        S.sec = null;
        go("secs");
      };
    else $("#nx").onclick = () => startEx(S.ex + 1);
    if (st.total) {
      if (pct >= 80) {
        confetti(pct === 100 ? 220 : 140);
        mascot.say("done_good", {}, true);
      } else if (pct >= 50) mascot.say("done_mid", {}, true);
      else mascot.say("done_low", {}, true);
    }
  }
  render();
  hud();
  mascot.start();
})();
