
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-long` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/right-long?s=duotone right-long}
 * @preview ![right-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM1MiAyMTZWMjk2SDQwLjAxMkMxNy45MTIgMjk2IDAgMjc4LjA5NCAwIDI1NlMxNy45MTIgMjE2IDQwLjAxMiAyMTZIMzUyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01MDQuMzIgMjczLjU5NEwzOTIuMjUgMzc3LjU5NEMzODUuMjU4IDM4NC4wNzggMzc1LjA2NiAzODUuODEyIDM2Ni4zMTIgMzgyQzM1Ny43ODEgMzc4LjI4NSAzNTIuMjgzIDM2OS45NjkgMzUyIDM2MC43MTVWMTUxLjI4MUMzNTIuMjgzIDE0Mi4wMzEgMzU3Ljc4MSAxMzMuNzExIDM2Ni4zMTIgMTI5Ljk5NkMzNzUuMDY2IDEyNi4xODggMzg1LjI1OCAxMjcuOTIyIDM5Mi4yNSAxMzQuNDA2TDUwNC4zMiAyMzguNDA2QzUxNC41NTkgMjQ3LjkwNiA1MTQuNTU5IDI2NC4wOTQgNTA0LjMyIDI3My41OTRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const RightLong: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M352 216V296H40.012C17.912 296 0 278.094 0 256S17.912 216 40.012 216H352Z" />
            <path d="M504.32 273.594L392.25 377.594C385.258 384.078 375.066 385.812 366.312 382C357.781 378.285 352.283 369.969 352 360.715V151.281C352.283 142.031 357.781 133.711 366.312 129.996C375.066 126.188 385.258 127.922 392.25 134.406L504.32 238.406C514.559 247.906 514.559 264.094 504.32 273.594Z" />
    </Icon>
);

export default RightLong;