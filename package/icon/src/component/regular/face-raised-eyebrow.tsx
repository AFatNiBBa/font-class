
import { Icon } from "../../index";

/**
 * A component that renders the `face-raised-eyebrow` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-raised-eyebrow?s=regular face-raised-eyebrow}
 * @preview ![face-raised-eyebrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/face-raised-eyebrow.svg)
 */
const FaceRaisedEyebrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416zM512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM144.4 240a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM160 352c0-13.3 10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24zM328.8 141.8l-29.5 29.5c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l29.5-29.5c25-25 66.6-20.9 86.2 8.5l4.9 7.4c4.9 7.4 2.9 17.3-4.4 22.2s-17.3 2.9-22.2-4.4l-4.9-7.4c-8.4-12.6-26.2-14.4-36.9-3.7zM128 144l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default FaceRaisedEyebrow;