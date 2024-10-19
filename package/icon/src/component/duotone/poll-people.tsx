
import { Icon, generic } from "../../index";

/**
 * A component that renders the `poll-people` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/poll-people?s=duotone poll-people}
 * @preview ![poll-people](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYxNiAzMkgyNDhDMjM0Ljc1IDMyIDIyNCA0Mi43NSAyMjQgNTZWMTY4QzIyNCAxODEuMjUgMjM0Ljc1IDE5MiAyNDggMTkySDYxNkM2MjkuMjUgMTkyIDY0MCAxODEuMjUgNjQwIDE2OFY1NkM2NDAgNDIuNzUgNjI5LjI1IDMyIDYxNiAzMlpNNTc2IDEyOEgyODhWOTZINTc2VjEyOFpNNjE2IDMyMEgyNDhDMjM0Ljc1IDMyMCAyMjQgMzMwLjc1IDIyNCAzNDRWNDU2QzIyNCA0NjkuMjUgMjM0Ljc1IDQ4MCAyNDggNDgwSDYxNkM2MjkuMjUgNDgwIDY0MCA0NjkuMjUgNjQwIDQ1NlYzNDRDNjQwIDMzMC43NSA2MjkuMjUgMzIwIDYxNiAzMjBaTTU3NiA0MTZIMjg4VjM4NEg1NzZWNDE2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yODggNDE2SDQxNlYzODRIMjg4VjQxNlpNMjg4IDk2VjEyOEg1MTJWOTZIMjg4Wk04MCA5NkMxMDYuNSA5NiAxMjggNzQuNSAxMjggNDhTMTA2LjUgMCA4MCAwUzMyIDIxLjUgMzIgNDhTNTMuNSA5NiA4MCA5NlpNMTI4IDMzNkMxMjggMzA5LjUgMTA2LjUgMjg4IDgwIDI4OFMzMiAzMDkuNSAzMiAzMzZTNTMuNSAzODQgODAgMzg0UzEyOCAzNjIuNSAxMjggMzM2Wk05NiA0MTZINjRDMjguNzUgNDE2IDAgNDQ0Ljc1IDAgNDgwVjQ5NkMwIDUwNC43NSA3LjI1IDUxMiAxNiA1MTJIMTQ0QzE1Mi43NSA1MTIgMTYwIDUwNC43NSAxNjAgNDk2VjQ4MEMxNjAgNDQ0Ljc1IDEzMS4yNSA0MTYgOTYgNDE2Wk05NiAxMjhINjRDMjguNzUgMTI4IDAgMTU2Ljc1IDAgMTkyVjIwOEMwIDIxNi43NSA3LjI1IDIyNCAxNiAyMjRIMTQ0QzE1Mi43NSAyMjQgMTYwIDIxNi43NSAxNjAgMjA4VjE5MkMxNjAgMTU2Ljc1IDEzMS4yNSAxMjggOTYgMTI4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const PollPeople: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M616 32H248C234.75 32 224 42.75 224 56V168C224 181.25 234.75 192 248 192H616C629.25 192 640 181.25 640 168V56C640 42.75 629.25 32 616 32ZM576 128H288V96H576V128ZM616 320H248C234.75 320 224 330.75 224 344V456C224 469.25 234.75 480 248 480H616C629.25 480 640 469.25 640 456V344C640 330.75 629.25 320 616 320ZM576 416H288V384H576V416Z" />
            <path d="M288 416H416V384H288V416ZM288 96V128H512V96H288ZM80 96C106.5 96 128 74.5 128 48S106.5 0 80 0S32 21.5 32 48S53.5 96 80 96ZM128 336C128 309.5 106.5 288 80 288S32 309.5 32 336S53.5 384 80 384S128 362.5 128 336ZM96 416H64C28.75 416 0 444.75 0 480V496C0 504.75 7.25 512 16 512H144C152.75 512 160 504.75 160 496V480C160 444.75 131.25 416 96 416ZM96 128H64C28.75 128 0 156.75 0 192V208C0 216.75 7.25 224 16 224H144C152.75 224 160 216.75 160 208V192C160 156.75 131.25 128 96 128Z" />
    </Icon>
);

export default PollPeople;