import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { patch } from "@ngxs/store/operators";
import { Observable, of, tap } from "rxjs";
import { DataCollectionFetch } from "./data-collection.actions";
import { DataCollectionStateModel } from "./data-collection.model";

const fakeFetchData = <T>() => {
  return of<T>({} as T);
};

@State<DataCollectionStateModel>({
  name: "data-collection",
  defaults: {
    data: [],
  },
})
@Injectable()
export class SdsState {
  @Selector()
  static all(state: DataCollectionStateModel): unknown[] {
    return state.data;
  }

  @Action(DataCollectionFetch)
  fetch(ctx: StateContext<DataCollectionStateModel>): Observable<unknown> {
    return fakeFetchData<unknown>().pipe(
      tap((data: unknown) => {
        ctx.setState(patch({ data }));
      })
    );
  }
}
