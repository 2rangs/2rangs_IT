import './App.css'

const PROFILE_IMAGE = 'https://avatars.githubusercontent.com/u/107464775?v=4'

const LINKS = [{ label: 'GitHub', href: 'https://github.com/2rangs' }]

const PROJECTS = [
    {
        title: 'Project A — 모바일 웹 사용자 경험 개선',
        goals: [
            '로그인, 비밀번호 변경, 업로드 흐름을 하나의 사용자 경험으로 연결',
            '모바일 환경에서도 입력과 예외 처리가 자연스럽게 이어지도록 설계',
            '보안 기준을 지키면서도 사용자 혼란을 줄이는 방향으로 개선',
        ],
        learned: [
            '인증과 폼은 기능이 아니라 흐름이라는 것',
            '친절함과 정보 노출은 다를 수 있다는 것',
            '모바일 환경에는 예상보다 많은 예외가 존재한다는 것',
        ],
        chips: ['Mobile Web', 'Auth', 'UX'],
    },
    {
        title: 'Project B — 지도 기반 마커 대시보드 구현',
        goals: [
            '다량의 마커와 상태 정보를 직관적으로 표현',
            '선택/하이라이트/이동 흐름을 예측 가능하게 구성',
            '정보 밀도를 조절하여 시선 흐름 유지',
        ],
        learned: [
            '상태 설계가 UI 복잡도를 결정한다는 것',
            '일관성이 신뢰를 만든다는 것',
            '지도 인터랙션은 예측 가능해야 한다는 것',
        ],
        chips: ['Map UI', 'Interaction', 'State'],
    },
    {
        title: 'Project C — 실시간 대시보드 UI 구성',
        goals: [
            '데이터를 많이 보여주기보다 빠르게 판단하게 만드는 것',
            'KPI, 알림, 리스트, 상세의 우선순위 정리',
            '로딩/빈 상태/에러 상태까지 경험으로 설계',
        ],
        learned: [
            '정보 구조 설계가 UI의 절반이라는 것',
            '보여주는 화면과 사용되는 화면은 다르다는 것',
            '실시간 데이터는 안정감 있는 표현이 중요하다는 것',
        ],
        chips: ['Dashboard', 'Realtime', 'Info Design'],
    },
    {
        title: 'Project D — 디자인 시스템 기획 및 개발',
        goals: [
            '일관성을 유지할 수 있는 UI 기준 수립',
            '다크모드 포함 토큰 기반 설계',
            '재사용 가능한 컴포넌트 패턴 정리',
        ],
        learned: [
            '예쁜 UI보다 일관된 UI가 더 어렵다는 것',
            '디자인 토큰은 유지보수의 핵심이라는 것',
            '명확한 기준이 개발 속도를 만든다는 것',
        ],
        chips: ['Design System', 'Tokens', 'Theming'],
    },
    {
        title: 'Project E — 게임 데이터 기반 개인 프로젝트',
        goals: [
            '관심 있는 게임 데이터를 활용한 인터랙션 설계 실험',
            '필터/시너지 계산/라인업 구성 기능 구현',
            '사용자가 탐색하는 경험 중심 UI 구성',
        ],
        learned: [
            '데이터 구조 설계가 인터랙션의 시작이라는 것',
            '재미있는 탐색 경험도 UX라는 것',
            '사이드 프로젝트는 실험하기 좋은 공간이라는 것',
        ],
        chips: ['Side Project', 'Data UI', 'Experiment'],
    },
]

function Pill({ children }) {
    return (
        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/70">
      {children}
    </span>
    )
}

function Card({ children, className = '' }) {
    return (
        <div
            className={[
                'group rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:p-8',
                'transition duration-200 hover:bg-white/[0.06]',
                'hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]',
                className,
            ].join(' ')}
        >
            {children}
        </div>
    )
}

function List({ items }) {
    return (
        <ul className="space-y-2 text-sm text-white/80 leading-6">
            {items.map((t) => (
                <li key={t} className="flex gap-2">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                    <span>{t}</span>
                </li>
            ))}
        </ul>
    )
}

function App() {
    const main = PROJECTS.slice(0, 4)
    const side = PROJECTS[4]

    return (
        <div className="min-h-screen bg-[#0d0f14] text-white">
            <div className="mx-auto w-full max-w-6xl px-6 py-14 md:py-16">
                {/* Top */}
                <header className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
                            <span className="text-xs font-semibold tracking-tight">2R</span>
                        </div>
                        <div className="leading-tight">
                            <div className="text-sm font-semibold text-white">2rang25</div>
                            <div className="text-xs text-white/60">Frontend Engineer</div>
                        </div>
                    </div>

                    <nav className="flex items-center gap-2 text-sm">
                        <a
                            href="#projects"
                            className="rounded-xl px-3 py-2 text-white/70 hover:text-white hover:bg-white/[0.06] transition"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="rounded-xl px-3 py-2 text-white/70 hover:text-white hover:bg-white/[0.06] transition"
                        >
                            Contact
                        </a>
                    </nav>
                </header>

                {/* Hero */}
                <section className="mt-12 md:mt-16 text-center">
                    <img
                        src={PROFILE_IMAGE}
                        alt="profile"
                        className="mx-auto h-24 w-24 rounded-3xl border border-white/10 object-cover"
                    />

                    <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
                        김이랑
                    </h1>

                    <p className="mt-4 text-white/70 text-base md:text-lg">
                        사용자 경험을 중요하게 생각하는 프론트엔드 개발자입니다.
                    </p>

                    <div className="mt-7 flex flex-wrap justify-center gap-3">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center rounded-2xl bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90 transition"
                        >
                            프로젝트 보기
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/[0.07] transition"
                        >
                            연락하기
                        </a>

                        {LINKS.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/[0.07] transition"
                            >
                                {l.label}
                            </a>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center gap-2">
                        {['UX', 'Mobile Web', 'Map UI', 'Dashboard', 'Design System'].map((t) => (
                            <Pill key={t}>{t}</Pill>
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section id="projects" className="mt-16 md:mt-20">
                    <div className="mb-8 md:mb-10 flex items-end justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-semibold text-white/90">Projects</h2>
                            <p className="mt-2 text-sm text-white/60">
                                익명 프로젝트 기준으로, 목표와 배운 점을 중심으로 정리했습니다.
                            </p>
                        </div>

                        <div className="hidden md:flex items-center gap-2">
                            <Pill>Goal</Pill>
                            <Pill>Learned</Pill>
                        </div>
                    </div>

                    {/* ✅ 2x2 Main Grid */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {main.map((p) => (
                            <Card key={p.title}>
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-lg md:text-xl font-semibold">{p.title}</h3>
                                    <div className="hidden md:flex flex-wrap justify-end gap-2">
                                        {p.chips?.slice(0, 3).map((c) => (
                                            <Pill key={c}>{c}</Pill>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-5 grid gap-6 md:grid-cols-2">
                                    <div>
                                        <div className="text-xs text-white/50 mb-3">Goal</div>
                                        <List items={p.goals} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-white/50 mb-3">Learned</div>
                                        <List items={p.learned} />
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* ✅ Side Project: Full width */}
                    <div className="mt-6">
                        <Card className="md:p-10">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div>
                                    <div className="text-xs text-white/50">Side Project</div>
                                    <h3 className="mt-2 text-xl md:text-2xl font-semibold">{side.title}</h3>
                                    <p className="mt-3 text-sm text-white/70 leading-6 max-w-3xl">
                                        관심 있는 데이터를 가지고 UI/인터랙션을 실험하는 프로젝트입니다.
                                        “재미”를 목표로 시작했지만, 결국은 사용자가 더 쉽게 탐색하도록 만드는 과정이었습니다.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 md:justify-end">
                                    {side.chips?.map((c) => (
                                        <Pill key={c}>{c}</Pill>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-7 grid gap-6 md:grid-cols-2">
                                <div>
                                    <div className="text-xs text-white/50 mb-3">Goal</div>
                                    <List items={side.goals} />
                                </div>
                                <div>
                                    <div className="text-xs text-white/50 mb-3">Learned</div>
                                    <List items={side.learned} />
                                </div>
                            </div>
                        </Card>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="mt-16 md:mt-20">
                    <Card>
                        <h2 className="text-2xl font-semibold text-white/90">Contact</h2>
                        <p className="mt-2 text-sm text-white/60">필요하면 깔끔하게 한 줄만 보내도 됩니다.</p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href="https://github.com/2rangs"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-2xl bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90 transition"
                            >
                                GitHub
                            </a>
                            <a
                                href="2_rang25@naver.com"
                                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/[0.07] transition"
                            >
                                Email
                            </a>
                        </div>

                        <div className="mt-6 text-xs text-white/40">© {new Date().getFullYear()} 2rang25</div>
                    </Card>
                </section>
            </div>
        </div>
    )
}

export default App