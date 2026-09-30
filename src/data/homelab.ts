export const nasSpecs = [
  { label: 'CPU', value: 'Intel Core i5-11500' },
  { label: 'Mainboard', value: 'MSI B560M Mortar WiFi' },
  { label: 'Memory', value: 'DDR4 16GB' },
  { label: 'Graphics', value: 'Intel UHD Graphics 750', detail: '내장 그래픽 · Quick Sync 지원' },
  { label: 'Network', value: '2.5GbE', detail: '메인보드 내장 네트워크 인터페이스' },
  { label: 'Storage', value: 'M.2 SSD 1TB + 500GB', detail: '각 1개 · 프로필에 기재된 SSD 구성' },
  { label: 'OS', value: 'TrueNAS SCALE' },
  { label: 'HDD', value: '8TB × 1', detail: '장착 완료 · NAS 저장장치', planned: false },
];

export const homelabSteps = [
  { number: '01', title: '컴퓨터 직접 조립', summary: '개발용 PC부터 NAS까지 직접 조립.', description: 'CPU, 메인보드, 메모리와 저장장치를 직접 조립해 NAS용 컴퓨터뿐 아니라 개발용 PC도 구성했습니다. NAS는 저장장치와 서비스 실행 환경으로 운영하고, 개발에는 직접 조립한 Windows PC와 MacBook을 함께 사용합니다.', tags: ['PC 직접 조립', 'NAS', 'Windows', 'macOS'] },
  { number: '02', title: 'TrueNAS 설치와 설정', summary: '하드웨어 위에 저장·운영 환경을 구성.', description: '직접 조립한 컴퓨터에 TrueNAS SCALE을 설치하고 NAS 운영 환경을 설정했습니다. M.2 SSD 1TB·500GB와 8TB HDD를 장착해 저장장치를 구성하고, 네트워크에 연결된 서버로 운영합니다.', tags: ['TrueNAS SCALE', 'M.2 SSD', '8TB HDD', '2.5GbE'] },
  { number: '03', title: '컨테이너 배포와 관리', summary: '실제 서비스가 실행되는 환경으로.', description: 'NAS 위에서 Docker 컨테이너를 실행하고 Portainer를 함께 사용해 관리합니다. 애플리케이션이 개인 컴퓨터의 개발 환경을 넘어 서버에서 동작하도록 배포 환경을 구성했습니다.', tags: ['Docker', 'Portainer', 'Deployment'] },
  { number: '04', title: '서비스 연결과 운영', summary: 'NAS를 실제 운영 서버로 활용.', description: 'Cloudflare를 활용한 외부 연결 환경과 NAS의 컨테이너 운영을 함께 다룹니다. AUBL의 Java·MariaDB 백엔드를 직접 구축한 서버에서 운영하며 웹 서비스와 연결하고 있습니다.', tags: ['Cloudflare', 'AUBL', 'Service operation'] },
];

export const homelabRoles = [
  { title: '직접 수행한 영역', points: ['개발용 PC 직접 조립과 NAS 하드웨어 구축', 'TrueNAS SCALE 설치 및 운영 환경 설정', 'Docker 컨테이너 배포와 Portainer 활용', 'Cloudflare 활용과 서버 운영'] },
  { title: 'AUBL에서 협업한 영역', points: ['협업자가 Java·SQL 기반 백엔드 구현', 'MariaDB와 연동하는 서버 애플리케이션', '해당 백엔드의 Docker 이미지를 NAS에 배포', '애플리케이션 구현과 인프라 운영을 연결'] },
];
