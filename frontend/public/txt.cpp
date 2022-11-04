class Solution {
public:
    vector<int> findBall(vector<vector<int>>& grid) 
    {
        int balli=0;
        int ballj=0;  // first ball at the zeroth position
        int endi=grid.length();
        int endj=grid[0].length();
        vector<int>anss;
        int ballno=0;
        int ansj;

        while(ballno<endj)
         {
             bool blocked=false;
             while(balli<endi && ballj<endj)
             {
                 //check direction of the current block the ball is in
                if(grid[balli][ballj]==1)   // \
                {  
                    
                    if(grid[balli][ballj+1]==1)  
                    {
                        ansj=ballj;
                        ballj++;
                        balli++;
                    } 
                    else 
                    {
                        anss.push_back(-1);
                        ballno++;
                        balli=0;
                        ballj=ballno;
                        blocked=true;
                        break;
                    }
                }           

                // /
                else
                {
                    if(grid[balli][ballj-1]==-1)
                    {
                        ansj=ballj;
                        balli++;
                        ballj--;
                    }
                    else            // v shape
                    {
                        anss.push_back(-1);
                        ballno++;
                        balli=0;
                        ballj=ballno;
                        blocked=true;
                        break;
                    }
                }
            }
            
            if(!blocked)
            {
                anss.push_back(ansj);
                ballno++;
                balli=0;
                ballj=ballno;
             }
             
                 
         }
            return anss;
    }
};
