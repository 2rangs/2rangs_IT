import { useEffect, useRef } from 'react';
import { SpinePlayer } from '@esotericsoftware/spine-player';
import '@esotericsoftware/spine-player/dist/spine-player.css';

interface SpineViewerProps {
    /** .skel 파일 경로 (public 기준) */
    skelUrl: string;
    /** .atlas 파일 경로 (public 기준) */
    atlasUrl: string;
    /** 재생할 애니메이션 이름 (기본: 첫 번째 애니메이션 자동 재생) */
    animation?: string;
    /** 뷰어 너비 */
    width?: string;
    /** 뷰어 높이 */
    height?: string;
    /** 배경색 (기본: 투명) */
    backgroundColor?: string;
    /** 스킨 이름 */
    skin?: string;
}

export default function SpineViewer({
                                        skelUrl,
                                        atlasUrl,
                                        animation,
                                        width = '100%',
                                        height = '500px',
                                        backgroundColor = '#00000000',
                                        skin,
                                    }: SpineViewerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<SpinePlayer | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // 기존 플레이어 정리
        if (playerRef.current) {
            playerRef.current.dispose();
            playerRef.current = null;
        }

        // 컨테이너 내부 초기화
        containerRef.current.innerHTML = '';

        const player = new SpinePlayer(containerRef.current, {
            skelUrl,
            atlasUrl,
            animation: animation || undefined,
            premultipliedAlpha: true,
            backgroundColor,
            // 첫 번째 애니메이션 자동 재생
            defaultMix: 0.2,
            showControls: true,
            ...(skin ? { skin } : {}),

            // 로드 성공 시 콜백
            success: (player) => {
                console.log('Spine 로드 성공!');
                console.log('사용 가능한 애니메이션:', player.animationState.data.skeletonData.animations.map(a => a.name));
                console.log('사용 가능한 스킨:', player.animationState.data.skeletonData.skins.map(s => s.name));
            },

            // 에러 시 콜백
            error: (_player, msg) => {
                console.error('Spine 로드 실패:', msg);
            },
        });

        playerRef.current = player;

        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, [skelUrl, atlasUrl, animation, backgroundColor, skin]);

    return (
        <div
            ref={containerRef}
            style={{ width, height }}
            className="spine-container"
        />
    );
}