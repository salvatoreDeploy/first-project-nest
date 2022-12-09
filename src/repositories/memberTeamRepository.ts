abstract class MemberTeamRepository {
  abstract create(name: string, memberFunction: string): Promise<void>;
}

export { MemberTeamRepository };
