
import { Icon } from "../../index";

/**
 * A component that renders the `gun-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gun-slash?s=thin gun-slash}
 * @preview ![gun-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/gun-slash.svg)
 */
const GunSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7zM473.4 240c6.4 0 12.5-2.5 17-7L513 210.3c1.5-1.5 3.5-2.3 5.7-2.3l49.4 0c22.1 0 40-17.9 40-40l0-64c0-22.1-17.9-40-40-40l-24 0 0-24c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 24L193 64l20.3 16L536 80l32 0c13.3 0 24 10.7 24 24l0 64c0 13.3-10.7 24-24 24l-49.4 0c-6.4 0-12.5 2.5-17 7L479 221.7c-1.5 1.5-3.5 2.3-5.7 2.3l-77.7 0 20.3 16 57.4 0zM48 200l0-67L32 120.4 32 200c0 22.1 17.9 40 40 40l2 0c20.8 0 36.1 19.6 31 39.8L65 440.2c-2.4 9.6-.2 19.7 5.8 27.5S86.1 480 96 480l112 0c14.7 0 27.5-10 31-24.2l35.9-143.6-13.8-10.9L223.5 451.9C221.7 459 215.3 464 208 464L96 464c-4.9 0-9.6-2.3-12.6-6.2s-4.1-8.9-2.9-13.7l40.1-160.5c4.1-16.3-.7-32.3-10.8-43.6l73.7 0-20.3-16L72 224c-13.3 0-24-10.7-24-24zm488-56c4.4 0 8-3.6 8-8s-3.6-8-8-8l-261.9 0 20.3 16L536 144z" />
    </Icon>
);

export default GunSlash;