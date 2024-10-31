
import { Icon } from "../../index";

/**
 * A component that renders the `left-to-bracket` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-to-bracket?s=light left-to-bracket}
 * @preview ![left-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/left-to-bracket.svg)
 */
const LeftToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192.8 257.8c-.5-.5-.8-1.1-.8-1.8s.3-1.4 .8-1.8L324.7 129.8c1.2-1.2 2.9-1.8 4.6-1.8c3.7 0 6.7 3 6.7 6.7l0 57.3c0 8.8 7.2 16 16 16l120 0c4.4 0 8 3.6 8 8l0 80c0 4.4-3.6 8-8 8l-120 0c-8.8 0-16 7.2-16 16l0 57.3c0 3.7-3 6.7-6.7 6.7c-1.7 0-3.3-.6-4.6-1.8L192.8 257.8zM160 256c0 9.5 3.9 18.6 10.8 25.1L302.8 405.5c7.2 6.8 16.7 10.5 26.5 10.5c21.4 0 38.7-17.3 38.7-38.7l0-41.3 104 0c22.1 0 40-17.9 40-40l0-80c0-22.1-17.9-40-40-40l-104 0 0-41.3c0-21.4-17.3-38.7-38.7-38.7c-9.9 0-19.3 3.8-26.5 10.5L170.8 230.9c-6.9 6.5-10.8 15.6-10.8 25.1zm16 192l-96 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 32C35.8 32 0 67.8 0 112L0 400c0 44.2 35.8 80 80 80l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
    </Icon>
);

export default LeftToBracket;