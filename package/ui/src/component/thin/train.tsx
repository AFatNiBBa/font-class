
import { Icon } from "../../index";

/**
 * A component that renders the `train` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train?s=thin train}
 * @preview ![train](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/train.svg)
 */
const Train: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 16c44.2 0 80 35.8 80 80l0 256c0 44.2-35.8 80-80 80L96 432c-44.2 0-80-35.8-80-80L16 96c0-44.2 35.8-80 80-80l256 0zM96 0C43 0 0 43 0 96L0 352c0 49.4 37.3 90.1 85.3 95.4L34.3 498.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L107.3 448l233.4 0 61.7 61.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-50.9-50.9c48-5.3 85.3-46 85.3-95.4l0-256c0-53-43-96-96-96L96 0zM272 320a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-48-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM96 80l256 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16L96 208c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zM64 96l0 96c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32L96 64C78.3 64 64 78.3 64 96z" />
    </Icon>
);

export default Train;