
import { Icon, generic } from "../../index";

/**
 * A component that renders the `landmark-dome` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/landmark-dome?s=duotone landmark-dome}
 * @preview ![landmark-dome](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiA0NjRWNDk2QzUxMiA1MDQuNzk5IDUwNC44MDEgNTEyIDQ5NiA1MTJIMTZDNy4xOTkgNTEyIDAgNTA0Ljc5OSAwIDQ5NlY0NjRDMCA0NTUuMTk5IDcuMTk5IDQ0OCAxNiA0NDhIMzJWNDE2QzMyIDM5OC4zMjYgNDYuMzI2IDM4NCA2NCAzODRWMjU2SDEyOFYzODRIMjI0VjI1NkgyODhWMzg0SDM4NFYyNTZINDQ4VjM4NEM0NjUuNjc0IDM4NCA0ODAgMzk4LjMyNiA0ODAgNDE2VjQ0OEg0OTZDNTA0LjgwMSA0NDggNTEyIDQ1NS4xOTkgNTEyIDQ2NFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDggMjU2SDQ2NEM0NzIuNzUgMjU2IDQ4MCAyNDguNzUgNDgwIDI0MFYyMDhDNDgwIDE5OS4yNSA0NzIuNzUgMTkyIDQ2NCAxOTJINDQ1LjEyNUM0MzEuNjI1IDExMS43NSAzNjguMjUgNDguMzc1IDI4OCAzNC44NzVWMTZDMjg4IDcuMjUgMjgwLjc1IDAgMjcyIDBIMjQwQzIzMS4yNSAwIDIyNCA3LjI1IDIyNCAxNlYzNC44NzVDMTQzLjc1IDQ4LjM3NSA4MC4zNzUgMTExLjc1IDY2Ljg3NSAxOTJINDhDMzkuMjUgMTkyIDMyIDE5OS4yNSAzMiAyMDhWMjQwQzMyIDI0OC43NSAzOS4yNSAyNTYgNDggMjU2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const LandmarkDome: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 464V496C512 504.799 504.801 512 496 512H16C7.199 512 0 504.799 0 496V464C0 455.199 7.199 448 16 448H32V416C32 398.326 46.326 384 64 384V256H128V384H224V256H288V384H384V256H448V384C465.674 384 480 398.326 480 416V448H496C504.801 448 512 455.199 512 464Z" />
            <path d="M48 256H464C472.75 256 480 248.75 480 240V208C480 199.25 472.75 192 464 192H445.125C431.625 111.75 368.25 48.375 288 34.875V16C288 7.25 280.75 0 272 0H240C231.25 0 224 7.25 224 16V34.875C143.75 48.375 80.375 111.75 66.875 192H48C39.25 192 32 199.25 32 208V240C32 248.75 39.25 256 48 256Z" />
    </Icon>
);

export default LandmarkDome;