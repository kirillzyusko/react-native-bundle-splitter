## Description

#### Video

#### Context and motivation

## Setup

## API

- register(): void
- preload(): Promise<void>
- use: ReactComponent

- addGroup(groupName: string, map: (componentName: string) => require)
- setPriority(componentName: string, priority: number)
- preload(componentName: string, staticMembers: {})
- loadInBackground(group?: string)
- ...