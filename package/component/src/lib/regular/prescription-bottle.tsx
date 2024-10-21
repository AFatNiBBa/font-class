
import { Icon } from "../../index";

/**
 * A component that renders the `prescription-bottle` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/prescription-bottle?s=regular prescription-bottle}
 * @preview ![prescription-bottle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/prescription-bottle.svg)
 */
const PrescriptionBottle: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 48l288 0 0 32L48 80l0-32zM40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l304 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40L40 0zM32 160l0 288c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-288-48 0 0 288c0 8.8-7.2 16-16 16L96 464c-8.8 0-16-7.2-16-16l0-32 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0 0-48 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0 0-48 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0 0-16-48 0z" />
    </Icon>
);

export default PrescriptionBottle;