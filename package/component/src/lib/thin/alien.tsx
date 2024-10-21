
import { Icon } from "../../index";

/**
 * A component that renders the `alien` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alien?s=thin alien}
 * @preview ![alien](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/alien.svg)
 */
const Alien: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 16C109.1 16 16 109.1 16 224c0 61.9 34.2 120.2 76.1 168c41.7 47.5 89.1 82.6 111.6 98c5.7 3.9 12.7 6 20.3 6s14.6-2.1 20.3-6c22.4-15.4 69.9-50.5 111.6-98c42-47.8 76.2-106.1 76.2-168c0-114.9-93.1-208-208-208zM0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 135.3-148.8 247.7-194.7 279.2c-8.6 5.9-18.9 8.8-29.3 8.8s-20.7-2.9-29.3-8.8C148.8 471.7 0 359.3 0 224zm368 0l-32 0c-44.2 0-80 35.8-80 80l32 0c44.2 0 80-35.8 80-80zm-32-16l32 0c8.8 0 16 7.2 16 16c0 53-43 96-96 96l-32 0c-8.8 0-16-7.2-16-16c0-53 43-96 96-96zM112 224l-32 0c0 44.2 35.8 80 80 80l32 0c0-44.2-35.8-80-80-80zm96 80c0 8.8-7.2 16-16 16l-32 0c-53 0-96-43-96-96c0-8.8 7.2-16 16-16l32 0c53 0 96 43 96 96z" />
    </Icon>
);

export default Alien;