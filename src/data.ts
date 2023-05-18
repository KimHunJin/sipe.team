const data = {
  imageCards: [
    {
      src: '/study.png',
      title: '함께 성장하고,',
      description: `6개월 동안 관심사가 비슷한 사람들과 스터디, 회고 작성, 사이드 프로젝트 등 원하는 방식의 목표를 설정하고 달성해보세요!`,
    },
    {
      src: '/beer.png',
      title: '재미있게 소통해요!',
      description: `알차게 공부하고 놀면 더 즐겁겠죠? 뒷풀이, 번개 모임 등 동아리원들과 친해질 수 있는 기회를 마련해드릴게요.`,
    },
  ],
  recruitment: {
    title: '모집 일정',
    list: [
      '서류 접수 : 5월 19일 ~ 6월 2일',
      '서류 합격자 발표 : 6월 14일',
      '커피챗(인터뷰) 진행 : 6월 24, 25일',
      '최종 합격자 발표 : 6월 28일',
    ],
  },
  qualification: {
    title: '지원 자격',
    list: [
      'SW 개발 경력을 가지고 있는 분',
      '관심사가 비슷한 사람들과 함께 기술을 학습하고 공유하며 성장하고 싶은 분',
      '다양한 사람들과 폭넓고 깊이 있는 네트워킹을 원하는 분',
      '격주 토요일 오후 2시 ~ 6시에 진행되는 정규 활동에 성실하게 참여할 수 있는 분',
    ],
  },
  event: {
    title: '활동 안내',
    list: [
      '2023년 7월 8일 ~ 12월 23일 (6개월)',
      '격주(2/4주) 토요일 오후 2시 ~ 6시',
    ],
  },
  schedule: [
    {
      title: 'OT & 1차 미션 선택',
      targetWeeks: [1],
      list: [
        {
          parents:
            '1주차 세션이 시작하기 전, 자유롭게 미션으로 제안하고 싶은 주제(개발 관련)를 등록합니다.',
          children: [
            '예시) 개발 서적 읽기, 사이드 프로젝트 진행, 블로그 글 5개 이상 작성 등',
          ],
        },
        '투표 기간 동안 본인이 원하는 주제를 선택할 수 있습니다. 단, 각 주제는 3명 이상 성립이 되어야 진행 가능합니다.',
      ],
    },
    {
      title: '1차 미션 진행',
      targetWeeks: [2, 3, 4, 5],
      list: [
        '원하는 주제를 선택하여 모인 사람들끼리 조를 짜서 2개월 동안 미션을 진행합니다.',
        {
          parents: '어떤 형태이든 반드시 미션의 결과물이 나와야 합니다.',
          children: [
            '예시) 책 내용을 정리한 글, 작성한 글을 모아둔 블로그 링크, 서비스 배포 링크, 자격증 취득 인증 등',
          ],
        },
      ],
    },
    {
      title: '1차 미션 공유 & 2차 미션 선택',
      targetWeeks: [6],
      list: [
        '미션 결과 공유 세션 때 서로의 결과물을 공유합니다.',
        '2차 미션 또한 같은 방식으로 진행됩니다. 기존 주제를 이어서 진행해도 되고, 새로운 주제를 선택해도 괜찮습니다.',
      ],
    },
    {
      title: '2차 미션 진행',
      targetWeeks: [7, 8, 9, 10],
      list: ['1차 미션과 동일하게 각 계획에 맞춰 미션을 수행합니다.'],
    },
    {
      title: '2차 미션 공유',
      targetWeeks: [11],
      list: ['2차 미션 수행 기간 동안 나온 결과물을 공유합니다.'],
    },
    {
      title: '송년회',
      targetWeeks: [12],
      list: ['참가 비용은 별도이며, 원하시는 분만 참석하시면 됩니다. '],
    },
  ],
  makers: [
    {
      src: '/IMG_이정민.png',
      name: '이정민',
      role: 'Frontend Developer',
    },
    {
      src: '/IMG_조기문.png',
      name: '조기문',
      role: 'Frontend Developer',
    },
    {
      src: '/IMG_이지원.png',
      name: '이지원',
      role: 'Frontend Developer',
    },
    {
      src: '/IMG_유현식.png',
      name: '유현식',
      role: 'IOS Developer',
    },
    {
      src: '/IMG_양효정.png',
      name: '양효정',
      role: 'Product Designer',
    },
  ],
};

export default data;
