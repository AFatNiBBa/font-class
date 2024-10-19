
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-zipper` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-zipper?s=duotone file-zipper}
 * @preview ![file-zipper](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxMjhWMEg0OEMyMS40OSAwIDAgMjEuNDkyIDAgNDhWNDY0QzAgNDkwLjUwOCAyMS40OSA1MTIgNDggNTEySDMzNkMzNjIuNTEgNTEyIDM4NCA0OTAuNTA4IDM4NCA0NjRWMTI4SDI1NlpNOTYgMzJIMTYwVjY0SDk2VjMyWk05NiA5NkgxNjBWMTI4SDk2Vjk2Wk05NiAxNjBIMTYwVjE5Mkg5NlYxNjBaTTEyOC4yNjggNDE2Qzg3LjcwMyA0MTYgNTcuNTEgMzc5LjU0NyA2NS40MzkgMzQwLjU0N0w5NiAyMjRIMTYwTDE5MC45NDMgMzQwLjg1MkMxOTguNzIxIDM3OS42OTkgMTY4LjUyNSA0MTYgMTI4LjI2OCA0MTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTE1OS44MzEgMzJIOTUuODMxVjY0SDE1OS44MzFWMzJaTTE1OS44MzEgMTYwSDk1LjgzMVYxOTJIMTU5LjgzMVYxNjBaTTE1OS44MzEgOTZIOTUuODMxVjEyOEgxNTkuODMxVjk2Wk0yNTUuODMxIDBWMTI4SDM4My44MzFMMjU1LjgzMSAwWk0xNTkuODMxIDIyNEg5NS44MzFMNjUuMjcgMzQwLjU0N0M1Ny4zNCAzNzkuNTQ3IDg3LjUzNCA0MTYgMTI4LjA5OCA0MTZDMTY4LjM1NiA0MTYgMTk4LjU1MSAzNzkuNjk5IDE5MC43NzQgMzQwLjg1MkwxNTkuODMxIDIyNFpNMTQzLjgzMSAzNjhIMTExLjgzMUMxMDIuOTk1IDM2OCA5NS44MzEgMzYwLjgzNiA5NS44MzEgMzUyUzEwMi45OTUgMzM2IDExMS44MzEgMzM2SDE0My44MzFDMTUyLjY2NyAzMzYgMTU5LjgzMSAzNDMuMTY0IDE1OS44MzEgMzUyUzE1Mi42NjcgMzY4IDE0My44MzEgMzY4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const FileZipper: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M256 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V128H256ZM96 32H160V64H96V32ZM96 96H160V128H96V96ZM96 160H160V192H96V160ZM128.268 416C87.703 416 57.51 379.547 65.439 340.547L96 224H160L190.943 340.852C198.721 379.699 168.525 416 128.268 416Z" />
            <path d="M159.831 32H95.831V64H159.831V32ZM159.831 160H95.831V192H159.831V160ZM159.831 96H95.831V128H159.831V96ZM255.831 0V128H383.831L255.831 0ZM159.831 224H95.831L65.27 340.547C57.34 379.547 87.534 416 128.098 416C168.356 416 198.551 379.699 190.774 340.852L159.831 224ZM143.831 368H111.831C102.995 368 95.831 360.836 95.831 352S102.995 336 111.831 336H143.831C152.667 336 159.831 343.164 159.831 352S152.667 368 143.831 368Z" />
    </Icon>
);

export default FileZipper;