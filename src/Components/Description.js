import React, { useContext, useEffect, useState } from "react";
import { ScaleContext, ModeContext } from "./Context";
import styled from 'styled-components';

const Description = () => {
	const [scale] = useContext(ScaleContext);
	const [mode] = useContext(ModeContext);

	const [key, setKey] = useState();

	const scaleDescriptions = {
		major: {
			C: "Completely pure. Its character is: innocence, simplicity, naivety, children's talk",
			C_sharp:
				"Rapture in sadness. A grimacing key of choking back tears. It is capable of a laugh or smile to pacify those around, but the truth is in despair. Fullness of tone, sonority, and euphony.",
			D:
				"The key of triumph, of Hallelujahs, of war-cries, of victory-rejoicing. Thus, the inviting symphonies, the marches, holiday songs and heaven-rejoicing choruses are set in this key",
			Eb: "The key of love, of devotion, of intimate conversation with God",
			E:
				"Noisy shouts of joy, laughing pleasure and not yet complete, full delight lies in E Major",
			F: "Complaisance, controlled calmness over the readiness to explode.",
			F_sharp:
				"Triumph over evil, obstacles, hurdles. Surmounting foes and finally finding rest in victory. Brilliant clarity of thought and feeling.",
			G:
				"Everything rustic, idyllic and lyrical, every calm and satisfied passion, every tender gratitude for true friendship and faithful love, in a word every gentle and peaceful emotion of the heart is correctly expressed by this key",
			Ab: "Key of the grave. Death, grave, putrefaction, judgment, eternity lie in its radius",
			A:
				"This key includes declarations of innocent love, satisfaction with one's state of affairs; hope of seeing one's beloved again when parting; youthful cheerfulness and trust in God",
			Bb:
				"Love, Clear Conscience, Hopeful Aspirations for the future and a better world. Optimistic and able to take control in order to ensure peace.",
			B:
				"Strongly colored, announcing wild passions, composed from the most glaring colors. Anger, rage, jealousy, fury, despair and every burden of the heart lies in its sphere",
		},
		minor: {
			C:
				"Declarations of love and lamenting lost love or unhappy relationships. It is languishing and full of longing, a soul in search of something different.",
			C_sharp:
				"A passionate expression of sorrow and deep grief. Full of penance and self-punishment. An intimate conversation with God about recognition of wrongdoing and atonement.",
			D: "Melancholy, feminine, brooding worries, contemplation of negativity.",
			Eb:
				"Dealing with anxiety and existential terror, deep distress, dark depression. The dark night of the soul. Fear, hesitation, shuddering, goose bumps. The language of ghosts.",
			E:
				"This key can carry grief, mournfulness, restlessness. Like a princess locked in a tower longing for her rescuer and future lover.",
			F:
				"Deepest depression, lament over death and loss, groans of misery, ready to expire. Harrowing. Melancholic.",
			F_sharp:
				"Tearing at your hair and shirt, discontentment, long periods of lamentation and crying. Still capable of fighting this feeling.",
			G:
				"Worry of the future, of a failed plan, gnashing of teeth. Concern over a failed plan. Struggling with dislike and malcontent.",
			Ab:
				"Suffocation of the Heart, Lamentations, Life-Long Struggles. A negative look at the experiences of life, competition, growth.",
			A: "Womanly, Graceful in character. Capable of soothing.",
			Bb:
				"The Garment of Night, Surly, Blasphemous, Turning away the world and the divine. Preparations for the end. Pessimism and giving up. Belief in darkness.",
			B:
				"The key of patience, calmly waiting for fate, destiny, and the submission to providence and karma.",
		},
	};
	const displayDescription = scaleDescriptions[mode][scale];
	
	const ScaleDescription = styled.p`
		font-size: 1.25rem;
		margin: 0.4em 0 0 0.4em;
		max-width: 800px;
		height: 60px;
		@media (max-width: 480px) {
			font-size: 1rem;
			min-height: 110px;
		}
	`;

	useEffect(() => {
		setKey(Math.floor(Math.random() * 100));
	}, [displayDescription]);

	return <ScaleDescription>{displayDescription}</ScaleDescription>;
};

export default Description;
