#include<iostream>
using namespace std;

void PrintPoints(int center_x, int  center_y , int x, int y)
{
    ///Q1(x,y)
    cout << "Q1 :"<<center_x+x<<" "<< center_y+y << endl;

///Q2(y,x)
    cout << "Q2 :"<<center_x+y<<" "<< center_y+x << endl;


     ///Q3(y,-x)
    cout << "Q3 :"<<center_x+y<<" "<< center_y-x << endl;

    ///Q4(x,-y)
    cout << "Q4 :"<<center_x+x<<" "<< center_y-y << endl;

    ///Q5(-x,-y)
   cout << "Q5 :"<<center_x-x<<" "<< center_y-y << endl;

    ///Q6(-y,-x)
    cout << "Q6 :"<<center_x-y<<" "<< center_y-x << endl;

    ///Q7(-y,x)
    cout << "Q7 :"<<center_x-y<<" "<< center_y+x << endl;

    ///Q8(x,y)
    cout << "Q8 :"<<center_x-x<<" "<< center_y+y << endl;

    cout<<"\n================\n";
    }

    void MidPointCircle(int center_x, int center_y, int r)
    {
        int x,y,p;

        ///Step 1
        x=0;
        y=r;

         ///Step 2
         p=1-r;

          ///Step 3

          while (x<=y)
          {
              PrintPoints(center_x,center_y,x,y);

              if(p<0)
              {
                  p=p+2*x+5;
                  x=x+1;
                  y=y;
              }

          else
          {
              p=p+2*x-2*y+5;
              x=x+1;
              y=y-1;
          }
          }

    }


int main()
{
    int center_x, center_y, r;

    cout << "Enter center X: ";
    cin >> center_x;

    cout << "Enter center Y: ";
    cin >> center_y;

    cout << "Enter radius: ";
    cin >> r;

    MidPointCircle(center_x, center_y, r);

    return 0;
}