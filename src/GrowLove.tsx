import {
	AbsoluteFill,
	Img,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const GrowLove = () => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();

	const scale = spring({
		fps,
		frame,
		config: {
			stiffness: 15,
			damping: 8,
		},
	});

	const bgScale = interpolate(scale, [0, 1], [1, 1.5], {
		extrapolateRight: 'clamp',
	});
	const bgPosition = interpolate(frame, [0, durationInFrames], [60, 63], {
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				textAlign: 'center',
				display: 'flex',
				width: '100vw',
				alignItems: 'center',
				justifyContent: 'center',
				fontSize: '18rem',
			}}
		>
			<div style={{transform: `scale(${scale})`, zIndex: 1}}>🌱❤️‍🔥</div>
			<AbsoluteFill>
				<Img
					src={staticFile('red-space.jpg')}
					style={{
						transform: `scale(${bgScale})`,
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						objectPosition: `center ${bgPosition}%`,
					}}
				/>
			</AbsoluteFill>
		</div>
	);
};
