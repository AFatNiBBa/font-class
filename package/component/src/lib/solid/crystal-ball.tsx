
import { Icon } from "../../index";

/**
 * A component that renders the `crystal-ball` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crystal-ball?s=solid crystal-ball}
 * @preview ![crystal-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/crystal-ball.svg)
 */
const CrystalBall: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 224c0 62.7-25.7 119.3-67.2 160L67.2 384C25.7 343.3 0 286.7 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224zM152.5 84.3l-9.8 26.4-26.4 9.8c-7 2.6-7 12.4 0 15l26.4 9.8 9.8 26.4c2.6 7 12.4 7 15 0l9.8-26.4 26.4-9.8c7-2.6 7-12.4 0-15l-26.4-9.8-9.8-26.4c-2.6-7-12.4-7-15 0zm159 48c-2.6-7-12.4-7-15 0l-18.4 49.8-49.8 18.4c-7 2.6-7 12.4 0 15l49.8 18.4 18.4 49.8c2.6 7 12.4 7 15 0l18.4-49.8 49.8-18.4c7-2.6 7-12.4 0-15l-49.8-18.4-18.4-49.8zm98.9 331.8c3.7 5.1 5.6 11.3 5.6 17.6c0 16.7-13.6 30.3-30.3 30.3L62.3 512C45.6 512 32 498.4 32 481.7c0-6.3 2-12.5 5.6-17.6L72 416l304 0 34.4 48.1z" />
    </Icon>
);

export default CrystalBall;