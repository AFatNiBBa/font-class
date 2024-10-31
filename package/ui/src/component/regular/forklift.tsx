
import { Icon } from "../../index";

/**
 * A component that renders the `forklift` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forklift?s=regular forklift}
 * @preview ![forklift](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/forklift.svg)
 */
const Forklift: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 160l16 0L96 40c0-22.1 17.9-40 40-40L293 0c16.6 0 31.5 10.3 37.4 25.8l83 218.9c1.7 4.5 2.6 9.3 2.6 14.2l0 13.1 0 72.4c19.6 17.6 32 43.1 32 71.6c0 53-43 96-96 96s-96-43-96-96l-64 0c0 53-43 96-96 96s-96-43-96-96l0-48L0 240c0-44.2 35.8-80 80-80zm160 80l120.3 0L287.4 48 144 48l0 123.4L240 240zm0 48c-10 0-19.8-3.1-27.9-8.9L112.6 208 80 208c-17.7 0-32 14.3-32 32l0 92.8C62.1 324.7 78.5 320 96 320c35.5 0 66.6 19.3 83.2 48l89.7 0c16.6-28.7 47.6-48 83.2-48c5.5 0 10.8 .5 16 1.3l0-33.3-128 0zM96 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm256 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM528 24l0 376 88 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24l0-400c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default Forklift;