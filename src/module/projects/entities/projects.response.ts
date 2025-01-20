export class ProjectResponse {
  public readonly id: number;
  public title: string;
  public description: string;
  public userId: number;
  public stacks: any;
  public video: string;
  public image: string;

  constructor(props: ProjectResponse) {
    Object.assign(this, props);
  }
}
