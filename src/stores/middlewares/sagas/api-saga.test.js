import { fetchData, rootSaga } from "./api-saga";
import { takeEvery } from "redux-saga/effects";

import * as api from "./api";
import { runSaga } from "@redux-saga/core";

describe("saga-api-testing", () => {
  describe("partial test", () => {
    const gen = rootSaga();
    it("should call fetchData", () => {
      expect(gen.next().value).toEqual(takeEvery("FETCH_REQUESTED", fetchData));
    });
    it("should be done on next iteration", () => {
      expect(gen.next().done).toBeTruthy();
    });
  });
  describe("full saga test", () => {
    let getData;
    afterEach(() => {
      getData.mockClear();
    });

    it("should call api and dispatch success action", async () => {
      const dummyData = [{ id: 1, title: "test data" }];
      getData = jest.spyOn(api, "getData").mockImplementationOnce(() => Promise.resolve(dummyData));
      const dispatched = [];
      const result = await runSaga({ dispatch: (action) => dispatched.push(action) }, fetchData);
      expect(getData).toHaveBeenCalledTimes(1);
      expect(dispatched[0]).toEqual({ type: "articlesReducers/dataLoaded", payload: dummyData });
    });

    it("should call api and dispatch error action", async () => {
      getData = jest.spyOn(api, "getData").mockImplementationOnce(() => Promise.reject("Api Error"));
      const dispatched = [];
      const result = await runSaga({ dispatch: (action) => dispatched.push(action) }, fetchData);
      expect(getData).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([{ type: "API_ERRORED", payload: "Api Error" }]);
    });
  });
});
