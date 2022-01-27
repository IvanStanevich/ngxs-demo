type Status = "on" | "off";

export class DataCollectionFetch {
  static readonly type = "[DataCollection] Fetch";
}

export class DataCollectionSetStatusFilter {
  static readonly type = "[DataCollection] Set Status Filter";

  constructor(public payload: Status) {}
}

export class SdsSetTeamsFilter {
  static readonly type = "[SDS] Set teams Filter";

  constructor(public payload: string[]) {}
}

export class SdsSetSort {
  static readonly type = "[SDS] Set sort";

  constructor(public payload: SORT) {}
}

export class SdsUpdateByPatch {
  static readonly type = "[SDS] Update by patch";

  constructor(public payload: IInstrumentSystemPatch) {}
}

export class SdsUpdateForTeams {
  static readonly type = "[SDS] Update for Teams";

  constructor(
    public payload: { update: IDeviceTeamsUpdateDetails; teams: string[] }
  ) {}
}

export class SdsRemoveByDevice {
  static readonly type = "[SDS] Remove by device";

  constructor(public payload: string) {}
}
